import React from "react";
import styled from "styled-components";
import Theme from "./theme/theme";
import GlobalStyles from "./theme/globalStyles";
import SideBar from "./components/SideBar";
import CoverLetter from "./components/Main";

const AppWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
`;

// TODO:

// 1. implement react router so I can include:
// - traditional resume;
// - writing sample;
// 2. do more work on UI/how I want it to lookup;
// 3. add profile picture DONE
// 4. complete sidebar components

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
