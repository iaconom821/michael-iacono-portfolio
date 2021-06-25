import PROFILEPHOTO from "../profilephoto.jpeg";
import styled from "styled-components";
import PortfolioCard from "./PortfolioCard";
import Nav from "./Nav";

const StyledImg = styled.img`
  width: 33vw;
`;

const StyledIframe = styled.iframe`
    width: 33vw;`

const projects = [ {
    id: 1,
    title: "Goodboardgames",
    description: "Rate, review, and add board games to your online shelf, and see the board games other users have.",
    video: "youtube/link",
    github: "https://github.com/iaconom821/goodboardgamesfrontend"
},
{
    id: 2,
    title: "SquareUpandRoundOut",
    description: "Track the amount of money you spent on a night out and how much you spent on food/drinks for friends",
    video: <StyledIframe width="560" height="315" src="https://www.youtube.com/embed/xRlKfIsDk1I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></StyledIframe>,
    github: "https://github.com/iaconom821/surofrontend"
},
{
    id: 3,
    title: "Let's Play Pick-Up Soccer",
    description: "Full calendar view to schedule and invite friends to play pick-up soccer at a local field",
    video: <StyledIframe width="560" height="315" src="https://www.youtube.com/embed/T9GoKqk_Eq0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></StyledIframe>,
    github: "https://github.com/iaconom821/fieldschedulerfrontend"
}]

const portfolioCards = projects.map(project => {
    return (
        <PortfolioCard project={project} />
    )
})

function Home() {
  return (
    <div>
      <StyledImg src={PROFILEPHOTO} alt="profile" />
      <h3>Technical Skills</h3>
      <p>Ruby, Rails, ActiveRecord, PostgreSQL, SQL, JavaScript, React, Redux, Python, ThreeJS, HTML, CSS, Git, Heroku</p>
      <div>
          {portfolioCards}
      </div>
      <Nav />
    </div>
  );
}

export default Home;
