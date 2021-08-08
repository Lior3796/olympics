import React from 'react';
import styled from 'styled-components';
import ContainerLinks from '../../Components/ContainerLinks/ContainerLinks';
import Header from '../../Components/Header/Header';
import Article from '../../Components/Article/Article';
import Topics from '../../Components/Topics/Topics';

function Content() {
    const Content = styled.div`
    position: relative;
    height: 200vh;
    width:100%;
    `;
    
    return (
        <Content>
          <ContainerLinks />
          <Header headline= "Latets News" />
          <Article />
        </Content>
    );
}

export default Content;