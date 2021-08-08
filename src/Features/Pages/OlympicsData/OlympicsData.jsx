import React from 'react';
import NextGames from '../../Components/NextGames/NextGames';
import Topics from '../../Components/Topics/Topics';
import './OlympicsData.css';
import ShowGamesIcons from '../../Components/ShowGamesIcons/ShowGamesIcons';
import Footer from '../../Components/Footer/Footer';
import AthletesCards from '../../Components/AthletesCards/AthletesCards';
import Table from '../../Components/Table/Table';
function OlympicsData() {
    return (
        <div className="OlympicContainer">
            <Topics />
            <ShowGamesIcons />
            
        </div>
    );
}

export default OlympicsData;