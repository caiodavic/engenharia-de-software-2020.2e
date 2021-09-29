import { createGlobalStyle } from 'styled-components';
import background from './assets/bg.svg';

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-image: url(${background});
        width: 100%;
        height: 100%;
        min-height: 100vh;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
    }

    *{
        box-sizing: border-box;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
            monospace;
    }

`;

export default GlobalStyle;
