import styled from "styled-components";
import {IPropsButton} from "./types";
import {Button} from "../styles";

export const ControlPanelContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

export const Scores = styled.div`
  margin-top: 30px;
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: space-between;
`

export const TimerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const TimerInput = styled.input`
  display: flex;
  width: 120px;
  height: 25px;
  margin-left: 10px;
  margin-right: 30px;
  box-sizing: border-box;
  border-radius: 5px;
  border: 1px solid darkgray;
`


export const ControlButton = styled(Button)<IPropsButton>`
  background: ${({isGameStarted}) => isGameStarted ? '#f09090' : 'lightgreen'};
`
