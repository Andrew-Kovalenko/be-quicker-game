import {useEffect, useState} from "react";
import {initialBoxes} from "../constants";

export const useActiveBox = (round: number | null, onBoxGenerated: (box: number) => void): void => {
    const [usedBoxes, setUsedBoxes] = useState([])
    const [boxes, setBoxes] = useState(initialBoxes)

    const getRandomBox = (): number => {
        const filteredBoxes = boxes.filter(box => !usedBoxes.includes(box))
        setBoxes(filteredBoxes)

        const box = filteredBoxes[Math.floor(Math.random() * filteredBoxes.length)]
        setUsedBoxes(prev => [...prev, box])

        onBoxGenerated(box)

        return box
    }

    useEffect(() => {
        round && getRandomBox()
    }, [round])
}
