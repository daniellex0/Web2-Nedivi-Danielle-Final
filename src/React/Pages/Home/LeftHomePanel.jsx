import React from 'react';
import styled from 'styled-components';

/* Components ---------------------------*/
import ExploreImage from './ExploreImage.jsx';

const LeftHomePanel = () => {

    return (
        <LeftHomePanelStyled className='LeftHomePanel'>
            <ExploreImage /> 
            <div className="home-descrip">
                <p>
                    With Tourly, book a tour with a world-class guide alone with a group of fellow fun adventurers. Discover the world in the most exciting and immersive way imaginable.
                </p>
                <p>
                    With Tourly, book a tour with a world-classguide alone with a group of fellow fun
                </p>
            </div>
        </LeftHomePanelStyled>
    );
}

export default LeftHomePanel;

const LeftHomePanelStyled = styled.div`

`;