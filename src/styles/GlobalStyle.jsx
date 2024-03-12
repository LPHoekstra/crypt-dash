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
    
    label {
        color: ${colors.label};
    }

    input {
        &:focus {
        outline-color: ${colors.primary2};
      }
    }

    form {
    display: flex;
    flex-direction: column;
    padding: 45px;
    
        div {
        display: flex;
        flex-direction: column;
        margin-bottom: 16px;
        
        label {
            margin-bottom: 9px;
            font-weight: 400;
            font-size: 13px;
        }
        
        input {
            border-radius: 10px;
            border: 1px solid ${colors.inputBorder};
            padding: 13px;
            }
        }   
        
        button {
            font-size: 15px;
            font-weight: 500;
            padding: 11px;
            margin-top: 4px;
            text-align: center;
            background-color: #1814f3;
            border: none;
            border-radius: 9px;
            color: ${colors.cardsText1};
        }
    }
}
`

function GlobalStyle() {
  return <StyledGlobalStyle />
}

export default GlobalStyle
