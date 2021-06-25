import styled from "styled-components";

const StyledDiv = styled.div`
    width: 100%;
    border: 2px solid black;
    border-radius: 5%;
    margin: 1vw;
    padding: 1vw;`

function PortfolioCard({ project }) {
  return (
    <StyledDiv key={project.id}>
      <h4>{project.title}</h4>
      <p>{project.description}</p>
      {project.video}
      <a href={project.github}>GitHub Repo</a>
    </StyledDiv>
  );
}

export default PortfolioCard;
