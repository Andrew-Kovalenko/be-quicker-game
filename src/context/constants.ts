import {IGameStateContext} from "./types";
import {initialBoxes} from "../constants";

export const initialGameState: IGameStateContext = {
    isGameStarted: false,
    initialBoxes: initialBoxes,
    activeBox: null,
    pcBoxes: [],
    userBoxes: [],
    winner: null,
    round: null,
}
