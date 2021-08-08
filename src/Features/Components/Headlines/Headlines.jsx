import React from 'react';
import styled from 'styled-components';

function Headlines({header,img}) {
    const StyledHeadlines = styled.div`
    display: flex;
    flex-direction: column;
    `;
    const HeaderCard  = styled.div`
    display: flex;
    justify-content: space-around;
    width: 70%;
    border-bottom:1px solid white;
    `
    return (
        <StyledHeadlines>
            <HeaderCard>
             <h3>{header}</h3>   
           <img src={img} width="35px" alt="" />
           
            </HeaderCard>
            
        </StyledHeadlines>
    );
}

export default Headlines;