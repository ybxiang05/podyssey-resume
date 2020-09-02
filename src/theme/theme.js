import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  color: {
    mermista: "#095c7d",
    mermistaLight: "#238fba",
    glimmer: "#d65ee6",
    sheRa: "#f2db29",
    wrongHordak: "#fafaf7",
    podysseyPink: "#F76C6C"
  },
  breakpoint: {
    mobile: "425px",
    tablet: "768px",
    desktop: "1024px"
  }
};

const Theme = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

export default Theme;
