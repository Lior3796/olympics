import React from 'react';
import styled from 'styled-components';
import LogoCard from '../../../LogoCard/LogoCard';

function ContainerCards() {
    const StyledCard = styled.div`
    position: absolute;
    top: 25%;
    right: 15%;
    border: 1px solid black;
    width: 30%;
    height: 53%;
    border-radius: 5px;
    filter:drop-shadow(2px 4px 6px black); 
    `;

    const CardContainer = styled.div`
    height: 100%;
    width: 100%;
    margin-top: auto;
    border: 1px solid black;

    `;
    const HeadingImage = styled.img`
    position:absolute;
    width:100%;
    height:100%;
    left:0;
    border-radius:5px;
    
    `;

    return (

        <CardContainer>
            <LogoCard name="lior" />
            <StyledCard>
                <HeadingImage src="https://source.unsplash.com/1600x900/?olympics?sport" alt="" />
            </StyledCard>
        </CardContainer>

    );
}

export default ContainerCards;