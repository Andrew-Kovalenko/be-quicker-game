import React, {createContext, useContext} from "react";
import {IGameAction, IGameStateContext} from "./types";

export const GameContext = createContext<IGameStateContext | null>(null)
export const GameDispatchContext = createContext(null)

export const useGameState = (): IGameStateContext => useContext(GameContext);
export const useGameDispatch = (): React.Dispatch<IGameAction> => useContext(GameDispatchContext);

