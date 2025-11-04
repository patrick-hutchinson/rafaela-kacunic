import Text from "@/components/Text";

const ProjectInfo = ({ project, project_index }) => {
  const image_count = project?.imagegallery?.length;

  return (
    <div className="info ff3">
      <p className="title">
        <span className="project_index">{project_index}.</span> {project.name} ({image_count} image
        {image_count === 1 ? "" : "s"})
        <br />
        {project.year && project.year}
      </p>
      {project.about && <Text text={project.about} />}
      {project.service && <p className="service">Service: {project.service}</p>}
      {project.client && <p className="client">Client: {project.client}</p>}
    </div>
  );
};

export default ProjectInfo;
