// creating the global styles of application
import { createGlobalStyle } from 'styled-components'

// circular progress bar comes with a default css, so doing the import here to make it only one time
import 'react-circular-progressbar/dist/styles.css';

// using template literals
export default createGlobalStyle`
    /* for all components */
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 14px;
        background: #7159c1;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
    }

    /* root id is the one in the index.html inside public folder */
    html, body, #root {
        /* kind of forcing the screen to be all occupied/filled */
        height: 100%;
    }
`;