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

  div {
    margin: auto;
  }

  h3,
  p {
    color: ${props => props.theme.color.wrongHordak};
  }

  h3 {
    font-size: 2rem;
  }

  img {
    height: 250px;
    width: 250px;
    object-fit: cover;
    border-radius: 150px;
    align-self: center;
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
        <p>Education</p>
        <p>Favourite podcasts and why (3)</p>
        <p>social media/where to find me</p>
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
