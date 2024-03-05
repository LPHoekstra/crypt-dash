import { createGlobalStyle } from "styled-components"
import colors from "./colors"

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
        color: ${colors.primary2};
    }
    h2 {
        font-size: 22px;
        font-weight: 600;
        color: ${colors.primary2};
    }
    h3 {
        font-size: 18px;
        font-weight: 500;
        color: ${colors.primary2};
    }
    h4 {
        font-size: 20px;
        font-weight: 600;
        color: ${colors.primary2};
    }
}
`

function GlobalStyle() {
  return <StyledGlobalStyle />
}

export default GlobalStyle
