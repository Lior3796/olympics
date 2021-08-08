import React, { useState,createContext, useEffect } from 'react';
import './Container.css';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import AppRouter from '../../../AppRouter/AppRouter';
import Footer from '../Footer/Footer';
import styled from 'styled-components';

function Container() {
    const windowWidth = window.screen.width;
    const [hamNav,setHamNav] = useState(false);
    const [width,setWidth] = useState();
    console.log(windowWidth);
    const Media = styled.med
    return (
        <div className="container-components">           
            <AppRouter /> 
        </div>
     
    );
}

export default Container;