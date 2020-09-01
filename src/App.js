import React from "react";
import styled from "styled-components";
import Theme from "./theme/theme";
import GlobalStyles from "./theme/globalStyles";
import SideBar from "./components/SideBar";
import Main from "./components/Main";
import Header from "./components/Header";

const AppWrapper = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

function App() {
  return (
    <Theme>
      <AppWrapper className="App">
        <GlobalStyles />
        <SideBar />
        <Header />
        <Main />
      </AppWrapper>
    </Theme>
  );
}

export default App;
