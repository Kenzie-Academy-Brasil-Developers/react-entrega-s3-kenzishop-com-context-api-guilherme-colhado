import styled from "styled-components";

export const Finish = styled.div`
    box-shadow: 5px 5px 10px var(--black);
    height: max-content;
    border-radius: 10px;
    overflow: hidden;
    
    >div{
        padding: 10px 15px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    >div:nth-child(1){
        background-color: var(--blue);
    }
    
`