import React, { useState,useEffect } from 'react';
import Header from '../Header/Header';
import './AthletesCards.css';
import AthleteCard from '../AthleteCard/AthleteCard';
import { SetAthletsContext } from '../../../Context';
import { AthProvider } from '../../../Context';

function AthletesCards() {
 const [changeDir,setChangeDir] = useState(0);
 const AthletsContext = SetAthletsContext();
 const AthletsMapData = ()=>{
    return AthletsContext.map((item,key)=>{
        return (
            <AthProvider value={{changeDir,setChangeDir}}>
        <AthleteCard athleteCard ={item} key={key} /> 
        </AthProvider>
        )
     })
 }
    return (
        <div className="AthletesCards-container">
            <div className="headline">
                <Header headline="Athletes" />
                <input type="button" className="sign-up" id="sign-in" value="View all" />
            </div>
            <div className="container-cards">
            {
                AthletsMapData()
            }
            </div>
            
             <div className="slider-buttons">
             <button onClick={()=> setChangeDir(changeDir + 100)}><i style={{ fontSize: "35px" }} class="fas fa-arrow-alt-circle-left"></i> </button>
            <button onClick={()=> setChangeDir(changeDir - 100)}><i style={{ fontSize: "35px", background: "transparent" }} class="fas fa-arrow-alt-circle-right"></i></button>
             </div>
            

        </div>
          
    );
}

export default AthletesCards;