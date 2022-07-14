import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        list-style: none;
        text-decoration: none;
        box-sizing: border-box;
        font-family: 'Albert Sans', sans-serif;
    }

    body{
        padding-top: 78px;
    }

    @media (max-width: 480px) {
        body{
            padding-top: 117px;
        }
    }
    
    :root{
        color: #000;
        --blue: #b8e0e8;
        --darkBlue: #0b3073;
        --white: #fff;
        --black: #000;
    }

`