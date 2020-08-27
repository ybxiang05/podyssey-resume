import React from "react";
import styled from "styled-components";
import SpotifyPlayer from "react-spotify-player";
import { setAutoFreeze } from "immer";

const StyledDiv = styled.div`
  width: 25%;
  height: 100vh;
  background-color: ${props => props.theme.color.mermista};
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h3,
  p {
    color: ${props => props.theme.color.wrongHordak};
  }

  h3 {
    font-size: 2rem;
  }
`;

const playerSize = {
  height: "80px",
  width: "100%"
};

const SideBar = () => {
  return (
    <StyledDiv>
      <h3>Yifan (Brooke) Xiang</h3>
      <p>Education</p>
      <p>Favourite podcasts and why (3)</p>
      <p>social media/where to find me</p>
      <SpotifyPlayer
        uri="spotify:episode:2SHRqwykgwVUN4QK2NCasY"
        size={playerSize}
        theme="black"
        view="list"
      />
    </StyledDiv>
  );
};
export default SideBar;
