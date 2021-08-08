import {useEffect, useState,useContext } from "react";
import { GetOlympicsEvents } from "../../../Context";
import styled from "styled-components";
import Log from "../Log/Log";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar({position}) {
    const [olympicsEvents,setOlympicsEvents] = useState(''); 
    const apiMedals = "http://api.espn.com/v1/sports/olympics/medals?dates=2008&season=summer";
    const getApi = () =>{
    
        fetch(apiMedals).then(res => res.json()).then(res => console.log(res));
    }
    useEffect(getApi,[])
    
    const StyledNav = styled.nav`
    width:100%;
    height:50px;
    border:1px solid black;
    display:flex;
    justify-content:${position? "space-between" : "center"};
    background: ${position? "#e5e5e5" : "white"};
   
    `;
    const StyledUl = styled.ul`
    width:70%;
    display:flex;
    justify-content:space-around;
    align-items:center;
    list-style:none;
   > * {
        font-weight: 100;
        font-size:1.3em;
        
    }
    @media only screen and (max-width: 600px) {
        {
         justify-content:flex-start;
       }
     }
    `;
   
    const switchKeys = (key) => {
     
        switch (key) {
            case 0 || 2:
                console.log(key);
                return "/" ;
        
            default:
                console.log(key);
                return "/OlympicData";
            
        }
    }

    const tourtements = GetOlympicsEvents();
    return (
        <StyledNav>
            <ul className="nav-ul">
            {
            tourtements.map((item,key)=>{
                return(
                <Link to={switchKeys(key)}>
                    <motion.li style={{color:"black",textDecorationLine:"none"}} whileHover={{scale:1.4}} key={key}>{position? item.country : item.catgory }</motion.li>
                </Link>
                )
   
            })    
            }
        </ul>
        {position&& <Log />} 
        </StyledNav>
    );
}

export default NavBar;