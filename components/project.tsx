// components/Project.tsx
import { useState } from 'react';
import { projectsData } from '@/data';
const Project = () => {
    const [currentProject, setCurrentProject] = useState(projectsData[0]);

    const handleProjectChange = (id: number) => {
        const project = projectsData.find(proj => proj.id === id);
        if (project) {
            setCurrentProject(project);
        }
    };

    return (
        <div>
            <h1>{currentProject.title}</h1>
            <p>{currentProject.info}</p>
            <div>
                {projectsData.map(project => (
                    <button key={project.id} onClick={() => handleProjectChange(project.id)}>
                        {`Cargar Proyecto ${project.id}`}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Project;
