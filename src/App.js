import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { Button } from "./Button";
import storage from "local-storage-fallback";
import { GlobalStyle } from "./GlobalStyle";
import "./styles.css";

function getInitialTheme() {
  const savedTheme = storage.getItem("theme");
  return savedTheme ? JSON.parse(savedTheme) : { mode: "light" };
}

export default function App() {
  const [theme, setTheme] = useState(getInitialTheme);
  useEffect(() => {
    storage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

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
