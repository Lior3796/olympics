import React from 'react';
import './UnorderList.css';
import { motion } from 'framer-motion';

function UnorderList({details}) {
    const liVariants = {
        hidden:{
            scale:0
        },
        visible:{
            scale:1,
            transition:{
                duration:0.8,
                ease:"easeOut"
            }
        }
        
    }
    const mapDetails = () =>{
        return details.data.map((item,key)=>{
          return (<motion.li variants={liVariants} whileHover={{scale:1.2}} initial="hidden" animate="visible" key={key}>{item}</motion.li>)
        })
    }
    return (
        <ul className="footer-ul">
            <h1>{details.headline}</h1>
             {
                mapDetails()
             }
        </ul>
    );
}

export default UnorderList;