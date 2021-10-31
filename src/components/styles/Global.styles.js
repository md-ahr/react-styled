import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap');
    :root {
        --primary-color: #fa9226;
        --white-color: #fff;
        --grey-color: #757575;
        --black-color: #333;
        --border-color: #a2a2a2;
        --bg-overlay-color: rgba(0, 0, 0, 0.6);
        --text-font: 'Poppins', sans-serif;
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html, body {
        width: 100%;
        min-height: 100%;
        font-size: 16px;
        font-family: var(--text-font);
        color: var(--black-color);
        background-color: var(--white-color);
        scroll-behavior: smooth;
    }
    ul li, ol li {
        list-style-type: none;
    }
    a {
        text-decoration: none;
    }
    a, button, input, select, textarea {
        outline: none;
        box-shadow: none;
    }
    textarea {
        resize: none;
    }
`;

export default GlobalStyle;
