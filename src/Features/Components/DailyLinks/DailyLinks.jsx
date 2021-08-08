import React from 'react';
import styled from 'styled-components';
function DailyLinks({link}) {
   const LinksBlock = styled.div`
   height: 87px;
   width: 20%;
   background: white;
   border: 2px solid black;
   z-index: 100;
   filter: drop-shadow(2px 4px 6px black);
   display:flex;
   align-content:center;
   `
   const LinkText = styled.h2`
   margin:auto;
   font-weight:100;
   text-decoration:underline;
   cursor:pointer;
   `;
    return (
        <LinksBlock>
            <LinkText>{link}</LinkText>
        </LinksBlock>
    );
}

export default DailyLinks;