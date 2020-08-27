import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Montserrat&family=Roboto&display=swap");
body {
    padding: 0;
    margin: 0;
    font-family: 'Roboto', sans-serif;
}
h1, h2, h3, h4 {
    font-family: 'Montserrat', sans-serif;
}`;

export default GlobalStyles;
