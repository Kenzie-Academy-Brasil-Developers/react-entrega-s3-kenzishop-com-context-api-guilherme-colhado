import styled from "styled-components";

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px 30px;
    flex-wrap: wrap;
    background: linear-gradient(var(--blue) 50%, white 100%) ;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    z-index: 1000;
    h1, a{
        color: var(--darkBlue);
        display: flex;
        align-items: center;
        svg{
            margin-top: -3px;
        }
    }
    a>div{
        position: relative;
        span{           
            position: absolute;
            top: -30%;
            left: 40%;
            border-radius: 100%;
            padding: 0 6px;
            background-color: var(--darkBlue);
            color: var(--blue);
            font-size: 15px;
        }
    }
    nav{
        display: flex;
        align-items: center;
        gap: 20px;
    }
    @media (max-width: 480px) {
        gap: 10px;
        flex-direction: column;
    }
`