import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import App from "./App";

const GlobalStyle = createGlobalStyle`
  body{
    background-color: ${(props) =>
      props.theme.mode === "dark" ? "#111" : "#eee"};
    color: ${(props) => (props.theme.mode === "dark" ? "#eee" : "#111")};
  }
`;

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={{ mode: "dark" }}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  rootElement
);
