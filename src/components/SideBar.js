import React from "react";
import styled from "styled-components";
import SpotifyPlayer from "react-spotify-player";
import image from "../images/brooke-img.jpeg";

const StyledContainer = styled.div`
  width: 30%;
  min-height: 100vh;
  background-color: ${props => props.theme.color.mermista};
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  z-index: 2;
  div {
    padding: 5%;
  }

  a {
    text-decoration: none;
    font-size: 1rem;
    font-weight: 500;
    color: ${props => props.theme.color.wrongHordak};
  }
  a:hover {
    color: ${props => props.theme.color.podysseyPink};
  }
  .contact {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
  }
  .sidebar-half {
    padding-top: 0;
  }
  @media (max-width: 1024px) {
    display: flex;
    position: relative;
    z-index: 0;
    width: 100%;
    min-height: 0;
    margin-top: 75px;
    flex-direction: row;
    padding-top: 50px;
  }
  @media (max-width: ${props => props.theme.breakpoint.tablet}) {
    flex-direction: column;
    margin-top: 0;
    max-height: 100vh;
  }

  h3,
  h4,
  p,
  li {
    color: ${props => props.theme.color.wrongHordak};
  }

  h3 {
    font-size: 1.5rem;
    text-align: center;
  }
  h4 {
    font-size: 1.25rem;
  }

  li {
    font-size: 1rem;
    line-height: 1.5rem;
  }
  p {
    font-size: 1rem;
  }

  img {
    display: block;
    margin: auto;
    height: 200px;
    width: 200px;
    object-fit: cover;
    border-radius: 150px;
    border: solid 5px ${props => props.theme.color.wrongHordak};
  }
`;

const playerSize = {
  height: "80px",
  width: "100%"
};

const SideBar = () => {
  return (
    <StyledContainer>
      <div className="sidebar-half top">
        <img src={image} alt="Hi! I'm Brooke!" />
        <h3>Brooke Xiang</h3>
        <div className="contact">
          <a target="_blank" rel="noopener noreferrer" href="mailto: brooke.xiang@gmail.com">
            brooke.xiang@gmail.com
          </a>
          <p>604.723.9993</p>
        </div>
      </div>
      <div className="sidebar-half bottom">
        <h4>Top 3 Podcasts at time of Writing</h4>
        <ul>
          <li>Ologies</li>

          <li>NPR's Code Switch</li>
          <li>The Moth</li>
        </ul>
        <p>
          Alie "Dad" Ward of Ologies is easily one of my favourite interviewers. I embedded my
          favourite Ologies episode of all time here to give you a sense of who I am as a person: a
          little bit metal, unapologeticially and brilliantly quirky, and full of unexpected
          knowledge.
        </p>
        <SpotifyPlayer
          uri="spotify:episode:2SHRqwykgwVUN4QK2NCasY"
          size={playerSize}
          theme="black"
          view="list"
        />
      </div>
    </StyledContainer>
  );
};
export default SideBar;
