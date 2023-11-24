import {useEffect, useState} from "react";
import {IUseCountdown} from "./types";

export const useCountdown = (
    initialTime: number | null,
    isGameStarted: boolean,
    round: null | number,
    onIntervalEnd: () => void,
): IUseCountdown => {
    const [activeRound, setActiveRound] = useState<number | null>(null);
    const [timeLeft, setTimeLeft] = useState<number>(initialTime);
    const [localTimeout, setLocalTimeout] = useState<NodeJS.Timeout>();

    const runTimer = () => {
        if (timeLeft === null) {
            return
        }

        if (timeLeft <= 0) {
            onIntervalEnd()
            runAgain();

            return;
        }

        const timer = setTimeout(() => setTimeLeft(prev => prev - 50), 50);
        setLocalTimeout(timer);

        return;
    }

    const runAgain = () => {
        setTimeLeft(initialTime)
        clearTimeout(localTimeout)
    }

    const resetCountdown = () => {
        setTimeLeft(null)
        clearTimeout(localTimeout)
    }

    useEffect(() => {
        isGameStarted ? runTimer() : resetCountdown()
    }, [isGameStarted, timeLeft, initialTime])

    useEffect(() => {
        if (round !== activeRound) {
            setActiveRound(round)
            runAgain()
        }
    }, [round])

    return { timeLeft }
}
