import React from "react";
import styled from "styled-components";
import Theme from "./theme/theme";
import GlobalStyles from "./theme/globalStyles";
import SideBar from "./components/SideBar";

const AppWrapper = styled.div`
  border: 2px solid black;
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
      </AppWrapper>
    </Theme>
  );
}

export default App;
