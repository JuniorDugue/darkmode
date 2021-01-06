import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import "./styles.css";

const Button = styled.button`
  padding: 10px;
  margin-top: 100px;
  cursor: pointer;
`;

export default function App() {
  const [theme, setTheme] = useState({ mode: "light" });

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <Button
          onClick={(e) =>
            setTheme(
              theme.mode === "dark" ? { mode: "light" } : { mode: "dark" }
            )
          }
        >
          Theme Toggle
        </Button>
      </div>
    </ThemeProvider>
  );
}
