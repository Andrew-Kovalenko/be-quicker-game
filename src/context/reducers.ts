import {IGameAction, IGameStateContext, REDUCER_ACTION_TYPE} from "./types";
import {PlAYER} from "../types";
import {initialGameState} from "./constants";

const updateStateBasedOnScore = (state: IGameStateContext): IGameStateContext => {
    if (state.pcBoxes.length === 10) {
        return {
            ...state,
            round: null,
            activeBox: null,
            isGameStarted: false,
            winner: PlAYER.PC,
        }
    }

    if (state.userBoxes.length === 10) {
        return {
            ...state,
            round: null,
            activeBox: null,
            isGameStarted: false,
            winner: PlAYER.USER,
        }
    }

    return {
        ...state,
        round: state.round ? state.round + 1 : 1,
    }
}

export function gameReducer(state: IGameStateContext, action: IGameAction): IGameStateContext {
    switch (action.type) {
        case REDUCER_ACTION_TYPE.START_GAME: {
            return {
                ...initialGameState,
                isGameStarted: true,
                round: 1
            };
        }

        case REDUCER_ACTION_TYPE.STOP_GAME: {
            return {
                ...state,
                isGameStarted: false,
                round: null
            };
        }

        case REDUCER_ACTION_TYPE.SET_ACTIVE_BOX: {
            return {
                ...state,
                activeBox: action.payload,
            };
        }

        case REDUCER_ACTION_TYPE.ADD_USER_BOX: {
            const userBoxes = [...state.userBoxes, action.payload]

            return updateStateBasedOnScore({
                ...state,
                userBoxes,
            })
        }

        case REDUCER_ACTION_TYPE.INTERVAL_ENDED: {
            const isUserSelectActive = state.userBoxes.includes(state.activeBox)
            const pcBoxes = isUserSelectActive ? state.pcBoxes : [...state.pcBoxes, state.activeBox]

            return updateStateBasedOnScore({
                ...state,
                pcBoxes,
            });
        }

        default:
            return state;
    }
}