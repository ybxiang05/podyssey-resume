import React from "react";
import styled from "styled-components";
import Theme from "./theme/theme";
import GlobalStyles from "./theme/globalStyles";
import SideBar from "./components/sideBar";
import CoverLetter from "./components/main";

const AppWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
`;

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
