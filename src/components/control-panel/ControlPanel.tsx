import React, {useMemo, useState} from "react";
import {useGameDispatch, useGameState, REDUCER_ACTION_TYPE} from "../../context";
import { ControlButton, ControlPanelContainer, Scores, TimerContainer, TimerInput} from "./styles";
import {useCountdown} from "../../hooks";

export const ControlPanel: React.FC = () => {
    const state = useGameState();
    const dispatch = useGameDispatch();
    const [ inputValue, setInputValue ] = useState<number | null>()
    const onIntervalEnd = () => dispatch({type:REDUCER_ACTION_TYPE.INTERVAL_ENDED})
    const { timeLeft } = useCountdown(inputValue, state.isGameStarted, state.round, onIntervalEnd)

    const onButtonClick = () => {
        state.isGameStarted
        ? dispatch({type: REDUCER_ACTION_TYPE.STOP_GAME })
        : dispatch({type: REDUCER_ACTION_TYPE.START_GAME })
    }

    const buttonText = useMemo(() => state.isGameStarted ? 'STOP GAME' : 'START GAME',[state.isGameStarted])

    const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(Number(event.target.value))
    }

    return (
        <ControlPanelContainer>
            <TimerContainer>
                Time(ms):
                    <>
                        <TimerInput
                            value={state.isGameStarted ? timeLeft : inputValue}
                            onChange={e => onChangeInput(e)}
                        />
                        <ControlButton onClick={onButtonClick} isGameStarted={state.isGameStarted}>{buttonText}</ControlButton>
                    </>
            </TimerContainer>
            <Scores>
                <div>User Score: {state.userBoxes.length}/10</div>
                <div>Computer Score: {state.pcBoxes.length}/10</div>
            </Scores>
        </ControlPanelContainer>
    )
}
