import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ExploreImage = () => {

    return (
        <ExploreImageStyled className='ExploreImage'>
            <Link to='/'>
                <img src="/assets/img/explore-tourly.png" alt="Explore the world with Tourly"/>
            </Link>  
        </ExploreImageStyled>
    );
}

export default ExploreImage;

const ExploreImageStyled = styled.div`
    
`;