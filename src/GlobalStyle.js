import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

  body{
    background-color: ${(props) =>
      props.theme.mode === "dark" ? "#111" : "#eee"};
    color: ${(props) => (props.theme.mode === "dark" ? "#eee" : "#111")};
  }
`;
