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
  h1,
  h2,
  h3,
  h4,
  h5 {
    color: ${props => props.theme.color.mermistaLight};
  }
  h2 {
    font-size: 1.75rem;
  }
  h5 {
    font-size: 1.25rem;
  }
  a {
    text-decoration: none;
    color: ${props => props.theme.color.mermistaLight};
  }
  a:hover {
    color: ${props => props.theme.color.podysseyPink};
  }
  ul,
  p {
    line-height: 1.75rem;
    list-style-type: none;
    font-size: 1rem;
  }
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
