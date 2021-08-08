import React from 'react';
import styled, { keyframes } from 'styled-components';

function Header({headline}) {

    const BackgroundAnimation = keyframes`
    0%{
        background-position:left; 
    }
    100%{
        background-position:right; 
    }
    `

    const StyleHeader = styled.h1`
    width:100%;
    padding: 25px;
    text-align:left;
    font-weight:700;
    line-height:0.8;
    font-size:100px;
    background-size:400%;
    -webkit-background-clip:text;
    color:transparent;
    background-position:right; 
    background-image:linear-gradient(45deg,grey,black);
    animation:${BackgroundAnimation} 5s 1s infinite alternate
    `;
   

    return (
        <StyleHeader>{headline}</StyleHeader>
    );
}

export default Header;