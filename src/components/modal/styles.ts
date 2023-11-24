import styled, {css} from "styled-components";
import {IPropsModalContainer} from "./types";

export const Layout = styled.div<IPropsModalContainer>`
  width: 100%;
  height: 100%;
  background: darkgray;
  transition: 0.3s ease-out;
  opacity: 0;
  visibility: hidden;
  position: fixed;
  top: 0;
  z-index: 5;

  ${({isOpen}) => {
    if (isOpen) {
      return css`
          opacity: 0.5;
          visibility: visible;
        ;`
    }
  }}
`

export const ModalContainer = styled.div<IPropsModalContainer>`
  width: 300px;
  height: 150px;
  background: white;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  
  transition: 0.3s ease-out;
  opacity: 0;
  visibility: hidden;
  filter: blur(8px);
  transform: scale(0.33);
  box-shadow: 0px 0px 61px 0px rgba(48,47,48,1);
  position: absolute;
  top: calc(50% - 75px);
  left: calc(50% - 150px);
  z-index: 10;
  
  ${({isOpen}) => {
      if (isOpen) {
        return css`
          box-shadow: -2rem 2rem 2rem rgba(black, 0.2);
          filter: blur(0);
          transform: scale(1);
          opacity: 1;
          visibility: visible;
        ;`
      }
  }}
`

export const ModalTitle = styled.h3`
  margin: 20px 0;
  font-size: 20px;
`

export const ModalDescription = styled.div`
  font-size: 16px;
`
