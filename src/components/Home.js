import PROFILEPHOTO from "../profilephoto.jpeg";
import styled from "styled-components";
import PortfolioCard from "./PortfolioCard";
import Nav from "./Nav";

const StyledImg = styled.img`
  width: 30vw;
  height: 30vw;
  display: inline;
  min-width: 2.2in;
  min-height: 2.2in;
`;

const StyledIframe = styled.iframe`
  max-width: 27vw;
  min-width: 2in;
  position: relative;
  margin: auto;
  display: block;
  margin-bottom: 1vh;
`;

const StyledTitles = styled.h1`
    margin: 1vw;
    font-size: 2rem;
    font-weight: bolder;`

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  min-width: 3in;
`;

const StyledP = styled.p`
  display: inline;
  width: 50vw;
  margin: 2vw;
  font-weight: bold;
  font-size: 1rem;
  min-width: 3in;
`;

const projects = [
  {
    id: 1,
    title: "Goodboardgames",
    description:
      "Rate, review, and add board games to your online shelf, and see the board games other users have.",
    url: "https://github.com/iaconom821/goodboardgamesfrontend",
      video: (
      <StyledIframe
        src="https://www.youtube.com/embed/UtkGlRds2Uc"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></StyledIframe>
    ),
    github: "https://github.com/iaconom821/goodboardgamesfrontend",
  },
  {
    id: 2,
    title: "SquareUp and RoundOut",
    description:
      "Track the amount of money you spent on a night out and how much you spent on food/drinks for friends",
    url: "https://squareupandroundout.netlify.app/",
      video: (
      <StyledIframe
        src="https://www.youtube.com/embed/xRlKfIsDk1I"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></StyledIframe>
    ),
    github: "https://github.com/iaconom821/surofrontend",
  },
  {
    id: 3,
    title: "Let's Play Pick-Up Soccer",
    description:
      "Full calendar view to schedule and invite friends to play pick-up games at a local soccer field",
    url: "https://letsplaypickupsoccer.netlify.app/login",
      video: (
      <StyledIframe
        src="https://www.youtube.com/embed/T9GoKqk_Eq0"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></StyledIframe>
    ),
    github: "https://github.com/iaconom821/fieldschedulerfrontend",
  },
  {
    id: 4,
    title: "War -HUH- What is it good for?",
    description:
      "The classic card game war",
    url: "https://warwhatisitgoodfor.netlify.app/",
      video: (
      <StyledIframe
        src="video coming soon"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></StyledIframe>
    ),
    github: "https://github.com/iaconom821/cardGameFrontend",
  }
];

const portfolioCards = projects.map((project) => {
  return <PortfolioCard key={project.id} project={project} />;
});

function Home() {
  return (
    <div>
      <StyledTitles>Michael Iacono</StyledTitles>
      <StyledDiv>
        <StyledImg src={PROFILEPHOTO} alt="profile" />
        <StyledP>
          I'm a Full Stack software developer with a knack for solving difficult
          problems through creative thinking and persistence. My attention to detail while writing code and my
          genuine enjoyment in finding and fixing bugs help me find solutions. Previous experience
          includes directing youth sports programs and camp operations
          including managing staff, hiring and recruiting, creating curriculum,
          and teaching classes. I'm looking for my next role to use my new
          skills. The skills I have gained motivating teams, managing conflict,
          and leading by example will serve me in my future career.
        </StyledP>
      </StyledDiv>
      <StyledTitles as="h3">Technical Skills</StyledTitles>
      <StyledP>
        JavaScript, React, Redux, NodeJS, ExpressJS, Ruby, Rails, ActiveRecord, PostgreSQL, SQL, MongoDB, Python, ThreeJS, HTML, CSS, Git, Heroku, Styled Components 
      </StyledP>
      <StyledTitles as="h3">Projects</StyledTitles>
      <StyledDiv>{portfolioCards}</StyledDiv>
      <Nav />
    </div>
  );
}

export default Home;
