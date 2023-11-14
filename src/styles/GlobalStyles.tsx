import { createGlobalStyle } from "styled-components";
import { JobStatusLabelVariables } from "./variables/JobStatusLabelVariables";
import { ColourVariables } from "./variables/ColourVariables";

export const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }

    :root {
        ${ColourVariables}

        --text-color-light: #fafafa;
        --text-color-dark: #2a2a2a;
        
        --border-radius: 5px;
        --box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.05);

        --header-height: 80px;
        --side-drawer-width: 250px;

        ${JobStatusLabelVariables}
    }

    html {
        box-sizing: border-box;
    }

    body {
        font-family: Roboto, sans-serif;
        font-size: 14px;
        background-color: var(--clr-bg);
        color: var(--text-color-dark);
    }
`;
