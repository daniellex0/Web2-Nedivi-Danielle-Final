import React from 'react';
import styled from 'styled-components';

/* Components ---------------------------*/
import TrendingTours from './TrendingTours.jsx';

const RightHomePanel = () => {

    return (
        <RightHomePanelStyled className='RightHomePanel'>
            <div className="trending-title">
                <h2>Trending Tours</h2> 
            </div>
            <TrendingTours />
            <div className="tourly-details">
                <p>
                    With Tourly, book a tour with a world-class guide alone with a group of fellow fun adventurers. Discover the world in the most exciting and immersive way imaginable.
                </p>
                <p>
                    With Tourly, book a tour with a world-classguide alone with a group of fellow fun adventurers. Discover the world in the most exciting and immersive way imaginable.
                </p>
            </div>
        </RightHomePanelStyled>
    );
}

export default RightHomePanel;

const RightHomePanelStyled = styled.div`
    .trending-title {
        text-align: center;
    }

    .tourly-details {
        background-color: #eaf4ff;
        padding: 20px;
        border-radius: 10px;
        margin: 20px 0 0 0;
    }
`;