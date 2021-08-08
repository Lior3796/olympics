import React,{useState,useContext,} from 'react';
import './GameIconCard.css';
import { motion,AnimatePresence } from 'framer-motion';
function GameIconCard({text}) {
  const newDate = new Date;
  
  const GameCardVarients = {
      hidden:{x:"-100vw"},
      visible:{x:0,transition:{duration:7,type:"spring", stiffness:50},
      exit:{x:"100vw",
      transition:{
      duration:4,
      ease:"easeInOut"
      }}
    }  
  }
  const [showText,setShowText] = useState(true);

    return (
    <AnimatePresence exitBeforeEnter>
        <motion.div  variants={GameCardVarients} initial="hidden"  animate="visible" exit="exit" className="game-card">
            <img src="https://olympics.com/images/static/b2p-picto/olympics/picto-skb.svg" width="55px" />
            <div className="game-text">
            <h1>{text}</h1>
            </div>
        </motion.div>
    </AnimatePresence>
    );
}

export default GameIconCard;