import React from "react";
import styled from "styled-components";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import SpotifyPlayer from "react-spotify-player";
import GlobalFonts from "./fonts/fonts";

const StyledContainer = styled.div`
  border: 2px solid black;
  display: flex;
  flex-direction: row;
  height: 100vh;
  background-color: #0f8cbd;
  p {
    font-family: "Montserrat";
  }
`;

const StyledPlayer = styled.div`
  border-radius: 5px;
  border: 10px solid black;
  height: fit-content;
`;
function App() {
  return (
    <StyledContainer className="App">
      <GlobalFonts />
      <p>hello, world 2</p>
      <StyledPlayer>
        <SpotifyPlayer
          uri="spotify:episode:2SHRqwykgwVUN4QK2NCasY"
          size="large"
          theme="black"
          view="list"
        />
      </StyledPlayer>
    </StyledContainer>
  );
}

export default App;
