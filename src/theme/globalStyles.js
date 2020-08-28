import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Montserrat&family=Roboto&display=swap");
body {
    padding: 0;
    margin: 0;
    font-family: 'Roboto', sans-serif;
    font-size: 1.15rem;
}
h1, h2, h3, h4 {
    font-family: 'Montserrat', sans-serif;
    font-size: 2rem;
    font-weight: 600;
}`;

export default GlobalStyles;
