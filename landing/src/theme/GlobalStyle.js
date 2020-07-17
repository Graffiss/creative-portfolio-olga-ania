import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    html {
        font-size: 62.5%;
    }
    body {
        font-size: 24px;
        background-color: ${({ theme }) => theme.color.background.secondary};
        color: ${({ theme }) => theme.color.text.primary};
        font-family: 'Montserrat', sans-serif;
        
    }
`

export default GlobalStyle
