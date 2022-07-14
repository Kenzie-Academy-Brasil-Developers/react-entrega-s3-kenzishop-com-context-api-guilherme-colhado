import styled from "styled-components";

export const Button = styled.button`
    width: 90%;
    padding: 10px;
    border: 1px solid var(--darkBlue);
    font-weight: 500;
    font-size: 1.5rem;
    color: var(--darkBlue);
    background-color: transparent;
    border-radius: 10px;
    cursor: pointer;
    transition: all .1s;
    position: relative;
    overflow: hidden;
    z-index: 1;
    ::before{
        z-index: -1;
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transition: all .25s;
        width: 0%;
        transform: translate(-50%, -50%) rotate(-45deg);
        height: 1000%;
        background-color: var(--darkBlue);
    }
    :hover{
        color: var(--blue);
        ::before{
            width: 100%;
        }
    }
`