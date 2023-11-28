import styled, { css } from "styled-components";
import { IPropsSquareContainer } from "./types";

export const BoardContainer = styled.div`
    box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.75);
    width: 100%;                
    height: 100%;
    margin: 5px 0;
    position: relative;      
    padding-top: 100%;   
`

export const Squares = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    gap: 2px;
    background-color: #a09f9f;
`

export const Square = styled.div<IPropsSquareContainer>`
    display: flex;
    width: 100%;
    height: 100%;
    background-color: #1b37c6;
    cursor: pointer;

    ${({ isActiveBox, isGuessedByUser, isGuessedByPC }) => {
        if (isActiveBox === true) {
            return css`background-color: yellow;`
        }

        if (isGuessedByUser) {
            return css`background-color: #028902;`
        }

        if (isGuessedByPC) {
            return css`background-color: darkred;`
        }
    }}
`;
