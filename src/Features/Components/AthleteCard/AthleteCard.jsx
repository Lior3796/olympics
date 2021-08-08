import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { SetAthletsContext } from '../../../Context';

function AthleteCard({key,athleteCard}) {
    const {changeDir,setChangeDir} = SetAthletsContext();
    console.log(changeDir);
    const imgVariant = {
        hover:{
            scale:1.2
        },
        hidden:{
            scale:1
        }
        
    };
    const cardVar = {
        hidden:{
            x:0,
            opacity:0
        },
        visible:{
            x: changeDir === -300? setChangeDir(0):  changeDir === 100 ? setChangeDir(0) : changeDir + 'vw',
            opacity:1,
            transition:{
                duration:1.5,
            }
        }
    }
    return (
        <motion.div variants={cardVar} initial="hidden" animate="visible" key={key} className="cards">
              <div className="medals">
               <div className="medals-circles"></div>
               <div className="medals-circles"></div>
               <div className="medals-circles"></div>
              </div>
      <motion.div variants={imgVariant} initial="hidden" whileHover="hover" className="img-container">
          <img className="ath-img" src={athleteCard.img} alt="" />
      </motion.div>
                
      <div className="athlets-details">
          <h1 className="athlets-name">{athleteCard.name}</h1>
          <span className="athlets-country">{athleteCard.country}</span>
      </div>
        </motion.div>
    
    );
}

export default AthleteCard;