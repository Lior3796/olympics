import React, { useState, createContext, useContext } from 'react';
import './ShowGamesIcons.css';
import GameIconCard from '../GamesIconCard/GameIconCard';
import { AnimatePresence } from 'framer-motion';

function ShowGamesIcons() {
    const [showEvent, setShowEvent] = useState(0);
    const [bool,setBool] = useState(false);
    const CardContext = createContext();
    const gameIconArray = [<GameIconCard text="JODO at 18:00PM" />, <GameIconCard text="Swimming at 16:00PM" />, <GameIconCard text="100M MEN RUN AT 15:00" />];

    const showRightEvent = () => {
        
        if (showEvent === gameIconArray.length - 1) {
            setShowEvent(0)
        }
        else {
            setShowEvent(showEvent + 1);
        }

    }
    const showLastEvent = () => {
        if (showEvent === 0) {
            setShowEvent(gameIconArray.length - 1)
        }
        else {
            setShowEvent(showEvent - 1);
        }

    }

    return (
        <div className="container" >
            <div className="showGamesContainer">
                <AnimatePresence exitBeforeEnter>
                    <CardContext.Provider value={{ showEvent, setShowEvent }}>
                        {
                           gameIconArray[showEvent]
                        }
                    </CardContext.Provider>
                </AnimatePresence>

                <div className="buttons">
                    <button onClick={showRightEvent}><i style={{ fontSize: "35px" }} class="fas fa-arrow-alt-circle-left"></i> </button>
                    <button onClick={showLastEvent}><i style={{ fontSize: "35px", background: "transparent" }} class="fas fa-arrow-alt-circle-right"></i> </button>
                </div>
            </div>
        </div>
    );
}

export default ShowGamesIcons;