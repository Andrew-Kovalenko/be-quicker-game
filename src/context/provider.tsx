import React, {useReducer} from "react";
import {GameContext, GameDispatchContext} from "./context";
import {initialGameState} from "./constants";
import {gameReducer} from "./reducers";

interface IPropsGameProvider {
    children: React.ReactNode
}

export const GameProvider: React.FC<IPropsGameProvider> = ({children}) => {
    const [gameState, dispatch] = useReducer(
        gameReducer,
        initialGameState,
    );
    return (
        <GameContext.Provider value={gameState}>
            <GameDispatchContext.Provider value={dispatch}>
                {children}
            </GameDispatchContext.Provider>
        </GameContext.Provider>
    )
}