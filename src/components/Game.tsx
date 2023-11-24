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
                Enter time in milisecond, press start. After it try to click on highlighted box before timer is left.
                If you did it - you'll get 1 point.
                If time is left and you din't click - 1 score goes to computer.
                To win the game to need to collect 10 points. Good luck!
            </Description>
        </TextContainer>
        <ControlPanel />
        <Board  />
        <Modal />
    </GameContainer>
);
