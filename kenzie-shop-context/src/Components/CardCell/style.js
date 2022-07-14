import styled from "styled-components";

export const CardCell = styled.section`
    box-sizing: 10px;
    width: 100%;
    background-color: var(--blue);
    border-radius: 10px;
    text-align: center;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    figure{
        background-color: var(--white);
        width: 100%;
        img{
            height: 200px;
        }
    }
    >div{
        width: 100%;
        div{
            padding: 15px 5px;
            width: 100%;
        }
    }
`