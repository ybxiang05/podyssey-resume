import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledNav = styled.nav`
  background-color: ${props => props.theme.color.wrongHordak};
  a {
    text-decoration: none;
    color: ${props => props.theme.color.mermista};
  }
  a:hover,
  a:active {
    color: ${props => props.theme.color.podysseyPink};
  }
  ul {
    display: flex;
    flex-direction: column;
    list-style-type: none;
    li {
      padding: 10px 20px;
      font-size: 1rem;
    }
  }
  display: none;
  @media (max-width: 1024px) {
    display: flex;
    position: fixed;
    z-index: 1;
  }
  height: 100vh;
`;

const BurgerMenu = ({ onClick }) => {
  const InternalListItem = ({ to, text }) => {
    return (
      <li onClick={onClick}>
        <Link to={to}>{text}</Link>{" "}
      </li>
    );
  };

  const ExternalItem = ({ href, text }) => {
    return (
      <li onClick={onClick}>
        <a target="_blank" rel="noopener noreferrer" href={href}>
          {text}
        </a>{" "}
      </li>
    );
  };
  return (
    <StyledNav>
      <ul>
        <InternalListItem to="/" text="README" />
        <InternalListItem to="/portfolio" text="Portfolio Highlights" />
        <ExternalItem href="https://github.com/ybxiang05" text="GitHub" />
        <InternalListItem to="/writing-sample" text="Writing Sample" />
        <InternalListItem to="/digital-marketing-resume" text="Digital Marketing Application" />
        <ExternalItem href="https://www.linkedin.com/in/brooke-xiang/" text="LinkedIn" />
      </ul>
    </StyledNav>
  );
};

export default BurgerMenu;
