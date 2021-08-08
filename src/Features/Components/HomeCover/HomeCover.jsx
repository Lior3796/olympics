import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ContainerCards from '../ContainerCards/ContainerCards';
function HomeCover() {
    const [img,setImage] = useState();
    useEffect(()=>{
        setImage("https://source.unsplash.com/1600x900/?olympics?sport");
    },[])
    const StyledDiv = styled.div`
    width: 100%;
    height: 100vh;
    border: 1px solid black;
    background-image: linear-gradient(45deg,black, transparent)
    ,url(${img});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    position: relative;

    `;

    return (

        <StyledDiv>
            <ContainerCards />
        </StyledDiv>
    );
}

export default HomeCover;