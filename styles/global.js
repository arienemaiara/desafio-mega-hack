import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
    }

    html, body, #__next {
        height: 100%;
    }

    body, button, input {
        font-family: 'Poppins', sans-serif;
        font-size: 14px;
        color: var(--textColor);
    }

    :root {
        --primary: #FF8000;
        --secondary: #C0272D;
        --lightGray: #F9F9F9;
        --textColor: #333333;
        --textGray: #828282;
        --danger: #C0272D;
        --success: #27AE60;
    }

`;

export default GlobalStyles;