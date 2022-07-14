import styled from "styled-components";

export const Home = styled.main`
    margin-top: 20px;
    width: 90%;
    margin: 10px auto 0;
    max-width: 1280px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    @media (max-width: 720px) {
        grid-template-columns: repeat(2, 1fr);    
    }@media (max-width: 720px) {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
`