import React from "react";
import styled from "styled-components";
import SpotifyPlayer from "react-spotify-player";
import image from "../images/brooke-img.jpeg";

const StyledContainer = styled.div`
  width: 25%;
  min-height: 100vh;
  background-color: ${props => props.theme.color.mermista};
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 1%;
  margin: auto;

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
  }
  p {
    font-size: 0.8rem;
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
      <div>
        <img src={image} alt="Hi! I'm Brooke :)" />
        <h3>Brooke Xiang</h3>
        <h4>Top 3 Podcasts at time of Writing</h4>
        <ul>
          <li>Ologies</li>
          
          <li>NPR's Code Switch</li>
          <li>The Moth</li>
        </ul>
        <p>
            Alie "Dad" Ward of Ologies is easily one of my favourite interviewers. I embedded my favourite Ologies episode of all time here to give you a sense of who I am as a person: a little bit metal, unapologeticially and brilliantly quirky, and full of unexpected knowledge.
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
