import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import BurgerMenu from "./BurgerMenu";
const StyledHeader = styled.div`
  position: fixed;
  display: flex;
  justify-content: flex-end;
  width: 70%;
  margin-left: 30%;
  background-color: ${props => props.theme.color.wrongHordak};
  box-shadow: 0 5px 10px 0 grey;
  ul {
    display: flex;
    flex-direction: row;
    list-style-type: none;
    li {
      padding: 10px 20px;
      font-size: 1rem;
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
  @media (max-width: ${props => props.theme.breakpoint.desktop}) {
    display: flex;
    justify-content: space-between;
    position: fixed;
    width: 100%;
    z-index: 1;
    margin: 0;
  }
  @media (max-width: ${props => props.theme.breakpoint.tablet}) {
    display: none;
  }
`;
const StyledButton = styled.div`
  display: none;
  padding: 10px;
  border: 3px solid ${props => props.theme.color.mermista};
  border-radius: 5px;
  margin: 5px;
  p {
    margin: 0;
    text-transform: uppercase;
    font-size: 0.8rem;
    font-weight: 800;
    color: ${props => props.theme.color.mermista};
  }
  @media (max-width: ${props => props.theme.breakpoint.tablet}) {
    display: block;
    position: fixed;
    z-index: 2;
    background-color: ${props => props.theme.color.wrongHordak};
  }
`;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const onClick = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log(isMenuOpen);
  };

  const onBlur = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <StyledHeader>
        <nav>
          <ul>
            <li>
              <Link to="/">README</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio Highlights</Link>
            </li>
            <li>
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/ybxiang05">
                GitHub
              </a>
            </li>
            <li>
              <Link to="/writing-sample">Writing Sample</Link>
            </li>
            <li>
              <Link to="/digital-marketing-resume">Digital Marketing Application</Link>
            </li>

            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/brooke-xiang/"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </nav>
      </StyledHeader>
      <StyledButton onClick={onClick} onBlur={onBlur}>
        {isMenuOpen ? <p>x</p> : <p>menu</p>}
      </StyledButton>
      {isMenuOpen && <BurgerMenu onClick={onClick} />}
    </>
  );
};

export default Header;
