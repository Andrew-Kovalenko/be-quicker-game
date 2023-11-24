import React from "react";
import {initialBoxes} from "../../constants";
import {REDUCER_ACTION_TYPE, useGameDispatch, useGameState} from "../../context";
import {useActiveBox} from "../../hooks";
import {BoardContainer, Square} from "./styles";

export const Board: React.FC = () => {
    const state = useGameState();
    const dispatch = useGameDispatch();
    const onBoxGenerated = (box: number) => dispatch({ type: REDUCER_ACTION_TYPE.SET_ACTIVE_BOX, payload: box })
    useActiveBox(state.round, onBoxGenerated)

    const onActiveClick = (boxNumber: number) => {
        if (boxNumber === state.activeBox) {
            dispatch({
                type: REDUCER_ACTION_TYPE.ADD_USER_BOX,
                payload: boxNumber
            })
        }
    }

    return (
        <BoardContainer>
            {initialBoxes.map(it => (
                <Square
                    key={it}
                    onClick={() => onActiveClick(it)}
                    isActiveBox={it === state.activeBox}
                    isGuessedByUser={state.userBoxes.includes(it)}
                    isGuessedByPC={state.pcBoxes.includes(it)}
                />
            ))}
        </BoardContainer>
    );
}
