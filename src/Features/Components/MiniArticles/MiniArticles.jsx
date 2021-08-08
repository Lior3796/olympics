import React,{useContext} from 'react';
import styled from 'styled-components';
import { SetMiniArticlesContext } from '../../../Context';
import Topics from '../Topics/Topics';

function MiniArticles({width,height}) {
    const MiniArticlesData = SetMiniArticlesContext();
    const MiniArticle = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    font-size: 1rem;
    width:30%;
    height:30%;

    `;
    const SmallArticles = styled.div`
    display:flex;
    justify-content:space-between;
    overflow-x:hidden;
    width:80%;
    height:100%;
    margin:auto;
    `;
     
    const MiniArticleFunc = () => {
        return MiniArticlesData.map((article,key)=>{
            return ( 
            <MiniArticle key={key}>
            <img src={article.img} alt="" width={width} height={height}  />
            <h3>{article.header}</h3>
            
            </MiniArticle>
            )
        })
    }

    return (
        <>
      <SmallArticles>
      {
          MiniArticleFunc()
      }
    
      </SmallArticles>
      

      </>
    );
}

export default MiniArticles;