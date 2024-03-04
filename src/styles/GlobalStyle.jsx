import { createGlobalStyle } from "styled-components"

const StyledGlobalStyle = createGlobalStyle`
* {
    margin: 0;
}

body {
    font-family: "Inter", sans-serif;
    font-size: 16px;
    font-weight: 400;

    h1 {
        font-size: 28px;
        font-weight: 600;
        color: #343C6A;
    }
    h2 {
        font-size: 22px;
        font-weight: 600;
        color: #343C6A;
    }
    h3 {
        font-size: 18px;
        font-weight: 500;
        color: #343C6A;
    }
    h4 {
        font-size: 20px;
        font-weight: 600;
        color: #343C6A;
    }
}
`

function GlobalStyle() {
  return <StyledGlobalStyle />
}

export default GlobalStyle
