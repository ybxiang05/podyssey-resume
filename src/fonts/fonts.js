import { createGlobalStyle } from "styled-components";
import MontserratWoff from "./Montserrat.woff";
import MontserratWoff2 from "./Montserrat.woff2";

export default createGlobalStyle`
@font-face {
    font-family: 'Montserrat';
    src: local('Montserrat'), local('Montserrat2'), url(${MontserratWoff}), url(${MontserratWoff2});
    font-weight: 400;
    font-style: normal;
}`;
