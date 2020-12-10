import React from 'react';
import styled from 'styled-components';

import TrendingTour from './TrendingTour.jsx';
import { trendingTours } from './trendingTours.js';

const TrendingTours = () => {

    const renderTrending = () => {
        return trendingTours.map((trending, idx) => {
            return <TrendingTour
                        key={ idx }
                        trending={ trending }
                    />;
        });
    }

    return (
        <TrendingToursStyled className='TrendingTours'>
            <div className='trending'>
                { renderTrending() }
            </div> 
        </TrendingToursStyled>
    );
}

export default TrendingTours;

const TrendingToursStyled = styled.div`
    .trending {
        display: flex;
        justify-content: center;
    }
    
`;