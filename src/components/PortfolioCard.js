import styled from "styled-components";
import {SocialIcon} from 'react-social-icons'

const StyledDiv = styled.div`
    width: 28vw;
    border: 2px solid black;
    border-radius: 5%;
    margin: 1vw;
    padding: 1vw;
    `

function PortfolioCard({ project }) {
  return (
    <StyledDiv>
      <h4>{project.title}</h4>
      <p>{project.description}</p>
      {project.video}
      <SocialIcon url={project.github} />
    </StyledDiv>
  );
}

export default PortfolioCard;
