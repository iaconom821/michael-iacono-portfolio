import styled from "styled-components";

function PortfolioCard({ project }) {
  return (
    <div key={project.id}>
      <h4>{project.title}</h4>
      <p>{project.description}</p>
      {project.video}
      <a href={project.github} />
    </div>
  );
}

export default PortfolioCard;
