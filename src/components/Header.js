import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledHeader = styled.div`
  position: fixed;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  background-color: ${props => props.theme.color.wrongHordak};
  box-shadow: 0 5px 10px 0 grey;
  ul {
    display: flex;
    flex-direction: row;
    justify-items: space-between;
    list-style-type: none;
    li {
      padding: 10px 20px;
    }
    a {
      text-decoration: none;
      color: ${props => props.theme.color.mermista};
    }
    a:hover,
    a:active {
      color: ${props => props.theme.color.podysseyPink};
    }
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <nav>
        <ul>
          <li>
            <Link to="/">README</Link>
          </li>
          <li>
            <a target="_blank" href="https://github.com/ybxiang05">
              GitHub
            </a>
          </li>
          <li>
            <Link to="/portfolio">Portfolio Highlights</Link>
          </li>
          <li>
            <Link to="/digital-marketing-resume">Digital Marketing Application</Link>
          </li>

          <li>
            <Link to="/writing-sample">Writing Sample</Link>
          </li>
          <li>
            <a target="_blank" href="https://www.linkedin.com/in/brooke-xiang/">
              LinkedIn
            </a>
          </li>
        </ul>
      </nav>
    </StyledHeader>
  );
};

export default Header;
