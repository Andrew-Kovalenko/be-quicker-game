import styled, {css} from "styled-components";
import {IPropsSquareContainer} from "./types";

export const BoardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  gap: 2px;
  background-color: #a09f9f;
  width: 450px;
  height: 450px;
  margin: 5px 0;
  box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.75);
`

export const Square = styled.div<IPropsSquareContainer>`
    display: flex;
    width: 100%;
    height: 100%;
    cursor: pointer;
    background-color: #1b37c6;

    ${({isActiveBox, isGuessedByUser, isGuessedByPC}) => {
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
