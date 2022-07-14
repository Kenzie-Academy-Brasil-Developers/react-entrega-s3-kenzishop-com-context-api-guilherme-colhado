import styled from "styled-components";

export const Cart = styled.main`
    margin-top: 20px;
    width: 90%;
    margin: 10px auto 0;
    display: flex;
    justify-content: space-between;
    table{
        border: 2px solid var(--black);
        border-bottom: none;
        border-collapse: collapse;
        font-size: 1.15rem;
        thead{
            background-color: var(--darkBlue);
            color: var(--blue);
        }
        tr{
            border-bottom: 2px solid var(--black);
        }
        td, th{
            border: 1px solid var(--black);
            padding: 10px;
            text-align: center;
        }
        tbody tr:nth-child(odd){
            td:nth-child(1){
                background-color: var(--white);
            }
            background-color: var(--blue);
        }
    }
`