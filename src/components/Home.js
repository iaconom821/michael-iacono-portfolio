import PROFILEPHOTO from "../profilephoto.jpeg";
import styled from "styled-components";
import PortfolioCard from "./PortfolioCard";
import Nav from "./Nav";

const StyledImg = styled.img`
  width: 30vw;
  display: inline;
`;

const StyledIframe = styled.iframe`
  max-width: 25vw;
  min-width: 12vw;
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledP = styled.p`
    display: inline;
    width: 50vw;
    margin: 2vw;`

const projects = [
  {
    id: 1,
    title: "Goodboardgames",
    description:
      "Rate, review, and add board games to your online shelf, and see the board games other users have.",
    video: "youtube/link",
    github: "https://github.com/iaconom821/goodboardgamesfrontend",
  },
  {
    id: 2,
    title: "SquareUpandRoundOut",
    description:
      "Track the amount of money you spent on a night out and how much you spent on food/drinks for friends",
    video: (
      <StyledIframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/xRlKfIsDk1I"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></StyledIframe>
    ),
    github: "https://github.com/iaconom821/surofrontend",
  },
  {
    id: 3,
    title: "Let's Play Pick-Up Soccer",
    description:
      "Full calendar view to schedule and invite friends to play pick-up games at a local soccer field",
    video: (
      <StyledIframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/T9GoKqk_Eq0"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></StyledIframe>
    ),
    github: "https://github.com/iaconom821/fieldschedulerfrontend",
  },
];

const portfolioCards = projects.map((project) => {
  return <PortfolioCard project={project} />;
});

function Home() {
  return (
    <div>
      <h1>Michael Iacono</h1>
      <StyledDiv>
        <StyledP>
          I'm a Full Stack software developer with a knack for solving difficult
          problems through creative thinking and persistence. A future employer
          will benefit from my attention to detail while writing code and my
          genuine enjoyment in finding and fixing bugs. Previous experience
          includes directing youth sports programs and camp operations
          including, managing staff, hiring and recruiting, creating curriculum,
          and teaching classes. I'm looking for my next role to use my new
          skills. The skills I have gained motivating teams, managing conflict,
          and leading by example will serve me in my future career.
        </StyledP>
        <StyledImg src={PROFILEPHOTO} alt="profile" />
      </StyledDiv>
      <h3>Technical Skills</h3>
      <p>
        Ruby, Rails, ActiveRecord, PostgreSQL, SQL, JavaScript, React, Redux,
        Python, ThreeJS, HTML, CSS, Git, Heroku
      </p>
      <h3>Projects</h3>
      <StyledDiv>{portfolioCards}</StyledDiv>
      <Nav />
    </div>
  );
}

export default Home;
