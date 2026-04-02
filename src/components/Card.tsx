type Props = {
  title: string;
  description: string;
  image: string;
};

const ProjectCard = ({ title, description, image }: Props) => {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ProjectCard;