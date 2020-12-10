import React from 'react';
import styled from 'styled-components';

import { mq } from 'common/mediaQueries.js';

/* Components ---------------------------*/
// import Template from '../Shared/Template.jsx';
import LeftHomePanel from './Home/LeftHomePanel.jsx';
import RightHomePanel from './Home/RightHomePanel.jsx';

const Home = () => {

    return (
        <HomeStyled className='Home'>
            <div className="columns">
                <div className="column column1">
                    <LeftHomePanel />
                </div>
                <div className="column column2">
                    <RightHomePanel/>
                </div> 
            </div>
        </HomeStyled>
    );
}

export default Home;

const HomeStyled = styled.div`
    .columns {
        justify-content: center;

        @media ${mq.tablet} {
        display: flex;
        flex-wrap: wrap;

            .column {
                padding: 20px;
            }

            .column1 {
                width: 30%;

                img {
                    /* position: relative; */
                    max-width: 100%;
                    height: auto;
                    margin-left: auto;
                    margin-right: auto;
                }
            }
            .column2 {
                width: 55%;

                img {
                    max-width: 100%;
                }

        }

    }

}

`;
