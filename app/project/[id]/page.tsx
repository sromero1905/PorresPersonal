// app/projects/[id]/page.tsx
"use client";

import { useRouter } from "next/router";
import { projectsData } from "@/data"; // Ruta al archivo de datos

const ProjectPage = () => {
    const router = useRouter();
    const { id } = router.query; // Obtén el ID desde la URL

    const project = projectsData.find((proj) => proj.id === parseInt(id as string));

    if (!project) {
        return <p>Proyecto no encontrado.</p>; // Manejo de error si el proyecto no existe
    }

    return (
        <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden w-full">
            <div className="w-full max-w-none text-white">
                <h1 className="text-3xl">{project.title}</h1>
                <p>{projectsData.info}</p>
                <img src={project.image} alt={project.title} className="mt-4" />
                <a href={project.link} className="text-blue-500">
                    {project.linkLabel}
                </a>
            </div>
        </main>
    );
};

export default ProjectPage;
