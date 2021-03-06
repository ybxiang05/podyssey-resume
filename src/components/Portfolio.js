import React from "react";
import styled from "styled-components";
import ray from "../assets/demo.gif";
import venmuse1 from "../assets/venmuse-artist.png";
import venmuse2 from "../assets/venmuse-home.png";
import r10Session from "../assets/session_screen_ios.png";
import r10Schedule from "../assets/schedule.png";
import r10About from "../assets/r10-about-android.png";
const StyledPortfolio = styled.div`
  border: 1px solid lightgrey;
  border-radius: 5px;
  margin: 2%;
  padding: 5%;
  h2,
  h1 {
    text-align: center;
    line-height: 1.75rem;
    font-size: 1.25rem;
  }

  ul {
    line-height: 1.75rem;
  }
  img {
    max-height: 500px;
    display: flex;
    margin: auto;
    padding: 10px;
  }

  .r10-imgs {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  @media (max-width: 1024px) {
    img {
      max-height: 350px;
    }
  }
`;
const Portfolio = () => {
  return (
    <StyledPortfolio>
      <h1>
        Hi! Thanks for visiting my portfolio highlights. I still have a ton to learn, but below are
        some of my recent projects that I had the most fun building.
      </h1>
      <h2>Uncle Ray's Ultimate Quarantine Workout</h2>
      <img src={ray} alt="gif of Uncle Ray's Quanrantine Workout" />
      <p>
        Something that usually keeps me sane in this life is playing ultimate frisbee. I'm a
        competitive athlete in the Vancouver ultimate scene, and I played on a touring team called
        Mola Mola (yes, the sunfish).
      </p>
      <p>
        Because of COVID-19 and the ensuing quarantine, the team is not able to get together to play
        the game, but we have a Zoom workout every week to keep up fitness and to have some safe
        social interaction. I got tired of having to refer back to Zoom chat for the next workout
        between exercises, and thus was born Uncle Ray's Ultimate Quarantine Workout (Uncle Ray is a
        stoic teammate who runs these workouts).{" "}
      </p>
      <p>
        This project is special to me because it's the first app I built that was entirely my own.
        While I understand why design and development are compartmentalized for efficiency in this
        trade, I value them together as a holistic process. Uncle Ray's allowed me to meld the two
        into a singular creative process, and I want to bring the same keen eye for design to
        working with Podyssey.
      </p>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/ybxiang05/Uncle-Rays-Quarantine-Workouts"
      >
        Click here to see the project on GitHub
      </a>
      <p>Technologies Used:</p>
      <ul>
        <li>React Native</li>
        <li>React Navigation</li>
        <li>React Countdown Component</li>
      </ul>
      <h2>VenMuse App</h2>
      <img src={venmuse1} alt="snapshot of VenMuse app, artist page" />
      <img src={venmuse2} alt="snapshot of VenMuse app, home page" />
      <p>
        VenMuse is a group project I made with three other junior developers over the period of a
        week. I was a professional musician in a previous life. As such, I know that a vibrant local
        music scene is predicated on local artists being able to connect with local venues. We built
        the app as a platform for musicians to be able to connect with venues, so it's easier for
        both parties to book gigs. This app also removes the middle person, and ensures the
        musicians get a higher cut than if they were to use an agent.
      </p>
      <p>
        I liked this project a lot because I got to design all of the UX, as well as some of the UI.
        I tend to think of myself as a fairly logical person without too much thought as to how
        others might arrive at the same conclusion through different journeys. Designing the UX flow
        really pushed me to, in a way, think out side of my own brain and "make sense" of the app
        through someone else's eyes. This project also holds significance for me as a musician,
        since I'm keen on helping to foster Vancouver's local music scene.
      </p>
      <a target="_blank" rel="noopener noreferrer" href="https://github.com/carbonmass/venmuse">
        Click here to see the project on GitHub
      </a>
      <p>Technologies Used:</p>
      <ul>
        <li>React</li>
        <li>Meteor</li>
        <li>MongoDB</li>
        <li>Material UI</li>
        <li>React Router</li>
        <li>Final Form</li>
      </ul>
      <h2>R10</h2>
      <div className="r10-imgs">
        <img src={r10Session} alt="R10's single event screen" />
        <img src={r10Schedule} alt="R10's schedule event screen" />
        <img src={r10About} alt="R10's about screen" />
      </div>
      <p>
        Ah, R10. I still don't understand why this project is called R10; it's one of the standard
        projects in the RED Academy App Dev course.
      </p>
      <p>
        This project is special to me because it was the first time I felt like I understood how to
        use React Native as well as its full potential. Really, I think I just like JSX and being
        able to use hooks and ternary statements (is that weird? There's something I find really
        satisfying about being using `useState` to turn components on and off like a lightswitch
        <span role="img" aria-label="sheepish smiley face">
          😅
        </span>
        ). I think, to my previous point about creating a holistic product, I appreciate that JSX
        allows me to mix HTML and JavaScript together, and separate them based on my own logic
        instead of someone else's.
      </p>

      <a target="_blank" rel="noopener noreferrer" href="https://github.com/carbonmass/r10">
        Click here to see the project on GitHub
      </a>
      <p>Technologies Used:</p>
      <ul>
        <li>React Native</li>
        <li>React Navigation</li>
        <li>Moment.js</li>
        <li>GraphQL</li>
        <li>Apollo Client</li>
      </ul>
    </StyledPortfolio>
  );
};

export default Portfolio;
