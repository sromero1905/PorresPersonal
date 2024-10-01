interface ProjectDetailInfoProps {
    id: number;
    title: string;
    description: string;
    image: string;
  }
  
  const ProjectDetailInfo: React.FC<ProjectDetailInfoProps> = ({
    id,
    title,
    description,
    image,
  }) => {
    return (
      <div className="project-detail">
        <img src={image} alt={title} className="project-image" />
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    );
  };
  
  export default ProjectDetailInfo;
  