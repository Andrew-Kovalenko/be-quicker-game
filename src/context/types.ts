import {PlAYER} from "../types";

export interface IGameStateContext {
    isGameStarted: boolean;
    initialBoxes: number[];
    activeBox: number | null;
    pcBoxes: number[];
    userBoxes: number[];
    winner: PlAYER | null;
    round: number | null;
}

export enum REDUCER_ACTION_TYPE {
    ADD_USER_BOX = 'ADD_USER_BOX',
    SET_ACTIVE_BOX = 'SET_ACTIVE_BOX',
    INTERVAL_ENDED = 'INTERVAL_ENDED',
    START_GAME = 'START_GAME',
    STOP_GAME = 'STOP_GAME',
}

export interface IGameAction {
    type: REDUCER_ACTION_TYPE,
    payload?: number;
}

