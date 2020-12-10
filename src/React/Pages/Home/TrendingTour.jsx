import React, { useState } from 'react';
import styled from 'styled-components';

// import { mq } from '../../common/mediaQueries.js';

const TrendingTour = ({trending}) => {

    return (
        <TrendingTourStyled className='TrendingTour'>
            <img 
                src={ trending.image } 
                alt={ trending.title }
            />
            <div className="title">{ trending.title }</div>
            <div className="description">{ trending.description }</div> 
        </TrendingTourStyled>
    );
}

export default TrendingTour;

const TrendingTourStyled = styled.div`
    outline: solid 5px white;

    margin: 20px;

    width: 200px;

    img {
        max-width: 100%;
        display: block;
    }

    .title {
        background-color: #FCF6ED;
        color: #000000;
        padding: 5px;
        font-family: 'Abril Fatface', cursive;

    }

    .description {
        background-color: #FCF6ED;
        color: #404040;
        padding: 5px;
    }
`;