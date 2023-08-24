import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }

    :root {
        --clr-primary: #018989;
        --clr-primary-light: #34a1a1;
        --clr-primary-dark: #016e6e;
        --clr-primary-rgba: rgba(1, 137, 137, 0.3);
        --clr-secondary: #18A1E0;
        --clr-secondary-light: #46b4e6;
        --clr-secondary-dark: #1381b3;
        --clr-danger: #cc0000;
        --clr-bg: #fafafa;
        --clr-outline: #e1dfe3;
        --clr-light: #fcfcfc;
        --clr-mid: #eee;
        --clr-dark: #c9c9c9;

        --text-color-light: #fafafa;
        --text-color-dark: #2a2a2a;
        
        --border-radius: 5px;
        --box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.05);

        --header-height: 60px;
        --side-drawer-width: 250px;
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
