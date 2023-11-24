import React, {useEffect, useMemo, useState} from "react";
import {REDUCER_ACTION_TYPE, useGameDispatch, useGameState} from "../../context";
import {Button, Description, Title} from "../styles";
import {PlAYER} from "../../types";
import {Layout, ModalContainer} from "./styles";

export const Modal: React.FC = () => {
    const state = useGameState();
    const dispatch = useGameDispatch();
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

    useEffect(() => {
        if (state.winner) {
            dispatch({type: REDUCER_ACTION_TYPE.STOP_GAME })
            setIsModalOpen(true)
        }
    }, [state.winner]);

    const winner = useMemo(() => state.winner === PlAYER.USER ? 'User' : 'Computer', [state.winner])

    return (
    <>
        <Layout isOpen={isModalOpen} />
        <ModalContainer isOpen={isModalOpen}>
            <Title>Game Over</Title>
            <Description>The winner is: <span>{winner}</span></Description>
            <Button onClick={() => setIsModalOpen(false)}>OKEY</Button>
        </ModalContainer>
    </>
    )
}