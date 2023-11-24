import React from "react";
import {ControlPanel} from "./control-panel/ControlPanel";
import {Board} from "./board/Board";
import {Modal} from "./modal/Modal";
import {Description, DescriptionSubTitle, GameContainer, Subtitle, TextContainer, Title} from "./styles";

export const Game: React.FC = () =>  (
    <GameContainer>
        <TextContainer>
            <Title>Be Quicker</Title>
            <Subtitle>GAME</Subtitle>
            <DescriptionSubTitle>RULES:</DescriptionSubTitle>
            <Description>
                Enter time in milliseconds, press start. After that try to click on highlighted box before time is left.
                If you'll catch - you'll get 1 point.
                If time is over and you didn't catch - 1 score goes to computer.
                You need to collect 10 points to win the game.
                Good luck!
            </Description>
        </TextContainer>
        <ControlPanel />
        <Board  />
        <Modal />
    </GameContainer>
);
