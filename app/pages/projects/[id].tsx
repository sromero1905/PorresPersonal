
// pages/projects/[id].tsx
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { projects } from '@/data'; // Asegúrate de que la ruta sea correcta
import ProjectDetailInfo from '@/components/ProjectDetail';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  details: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = projects.map((project) => ({
    params: { id: project.id.toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const projectId = parseInt(params?.id as string);
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return { notFound: true }; // Si no se encuentra el proyecto, devuelve 404
  }

  return {
    props: {
      project,
    },
  };
};

interface ProjectPageProps {
  project: Project;
}

const ProjectPage = ({ project }: ProjectPageProps) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <ProjectDetailInfo
        id={project.id}
        title={project.title}
        description={project.description}
        image={project.image}
      />
      <p>{project.details}</p>
    </div>
  );
};

export default ProjectPage;
