import styled from "styled-components";
import {SocialIcon} from 'react-social-icons'

const StyledDiv = styled.div`
    width: 28vw;
    border: 2px solid black;
    border-radius: 5%;
    margin: 1vw;
    padding: 1vw;
    min-width: 2.2in;
    `

const StyledSocialIcon = styled(SocialIcon)`
    display: block;
    `

const StyledA = styled.a`
  color: black;`

function PortfolioCard({ project }) {
  return (
    <StyledDiv>
      <h3><StyledA href={project.url} target="_blank" rel="noreferrer" >{project.title}</StyledA></h3>
      <p>{project.description}</p>
      {project.video}
      <StyledSocialIcon url={project.github} target="_blank" />
    </StyledDiv>
  );
}

export default PortfolioCard;
