import React from "react";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import DMResume from "./DMResume";
import WritingSample from "./WritingSample";
import Portfolio from "./Portfolio";

const StyledMain = styled.main`
  margin: 100px 0 50px 30%;
  width: 100%;
`;

const Main = () => {
  return (
    <StyledMain>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/digital-marketing-resume" component={DMResume} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/writing-sample" component={WritingSample} />
      </Switch>
    </StyledMain>
  );
};

export default Main;
