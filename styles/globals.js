
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
html,
body  {
    padding: 0;
    margin: 0;
    background-color: red;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygem, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

a {
    color: inherit;
    text-decoration: none;
}

* {
    box-sizing: border-box;
}`

export default GlobalStyles;

