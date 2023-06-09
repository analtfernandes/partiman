import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    /* http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain)
    */

    html,
    body,
    div,
    span,
    applet,
    object,
    iframe,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    blockquote,
    pre,
    a,
    abbr,
    acronym,
    address,
    big,
    cite,
    code,
    del,
    dfn,
    em,
    img,
    ins,
    kbd,
    q,
    s,
    samp,
    small,
    strike,
    strong,
    sub,
    sup,
    tt,
    var,
    b,
    u,
    i,
    center,
    dl,
    dt,
    dd,
    ol,
    ul,
    li,
    fieldset,
    form,
    label,
    legend,
    table,
    caption,
    tbody,
    tfoot,
    thead,
    tr,
    th,
    td,
    article,
    aside,
    canvas,
    details,
    embed,
    figure,
    figcaption,
    footer,
    header,
    hgroup,
    menu,
    nav,
    output,
    ruby,
    section,
    summary,
    time,
    mark,
    audio,
    video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article,
    aside,
    details,
    figcaption,
    figure,
    footer,
    header,
    hgroup,
    menu,
    nav,
    section {
    display: block;
    }
    body {
    line-height: 1;
    }
    ol,
    ul {
    list-style: none;
    }
    blockquote,
    q {
    quotes: none;
    }
    blockquote:before,
    blockquote:after,
    q:before,
    q:after {
    content: "";
    content: none;
    }
    table {
    border-collapse: collapse;
    border-spacing: 0;
    }

    /* My styles */
    html {
        scroll-behavior: smooth;
    }

    body {
        width: 100%;
        height: 100vh;
        position: relative;
        font-family: "Roboto", "Open Sans", "Helvetica Neue", sans-serif;
        letter-spacing: 0.5px;
        background-color: var(--white);
        overflow-y: scroll;
    }

    * {
        box-sizing: border-box;
        --blue:#38B9E2;
        --white: #F9FAFA;
        --light-gray:#B6B6B6;
        --medium-gray-light: #949494;
        --medium-gray-dark: #394B50;
        --dark-gray: #262626;
        --black: #0D0D0D;
    }

    #root {
        height: 100%;
    }

    main {
        width: 90%;
        max-width: 900px;
        height: auto;
        display: flex;
        flex-direction: column;
        align-items: initial;
        justify-content: initial;
        margin: 70px auto 0;
        padding-bottom: 30px;
        overflow: hidden;
    }

    b {
        font-weight: 700;
    }

    a {
        cursor: point;
        text-decoration: none;
    }

    input,
    button {
        outline: none;
    }
`;

export { GlobalStyle };
