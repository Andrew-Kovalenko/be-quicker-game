import * as React from "react";

import {GameProvider} from "./context/provider";
import {Game} from "./components/Game";
import './styles.css'

export const App: React.FC = () => {
    return (
        <GameProvider>
            <Game />
        </GameProvider>
    );
}
