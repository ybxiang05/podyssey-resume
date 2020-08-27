import React from "react";
import styled from "styled-components";
import SpotifyPlayer from "react-spotify-player";

const StyledDiv = styled.div`
  width: 25%;
  height: 100vh;
  background-color: ${props => props.theme.color.mermista};
  position: absolute;
`;
const StyledTitle = styled.h3`
  font-size: 2rem;
  color: ${props => props.theme.color.wrongHordak};
`;

const SideBar = () => {
  return (
    <StyledDiv>
      <StyledTitle>Yifan (Brooke) Xiang</StyledTitle>
      <p>hello, world</p>
      <SpotifyPlayer
        uri="spotify:episode:2SHRqwykgwVUN4QK2NCasY"
        size="large"
        theme="black"
        view="list"
      />
    </StyledDiv>
  );
};
export default SideBar;
