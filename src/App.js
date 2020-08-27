import React from "react";
import styled from "styled-components";
import Theme from "./theme/theme";
import GlobalStyles from "./theme/globalStyles";
import SideBar from "./components/SideBar";
import CoverLetter from "./components/Main";
import { lookup } from "dns";

const AppWrapper = styled.div`
  border: 2px solid black;
  display: flex;
  flex-direction: row;
  height: 100vh;
`;

// TODO:
// 1. figure out what sections I need to write:
// - about me;
// - work experience/journey;
// - why I want to work with Podyssey;
// 2. implement react router so I can include:
// - traditional resume;
// - writing sample;
// 3. do more work on UI/how I want it to lookup;
// 4. add profile picture

function App() {
  return (
    <Theme>
      <AppWrapper className="App">
        <GlobalStyles />
        <SideBar />
        <CoverLetter />
      </AppWrapper>
    </Theme>
  );
}

export default App;
