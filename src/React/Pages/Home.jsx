import React from 'react';
import styled from 'styled-components';

/* Components ---------------------------*/
// import Template from '../Shared/Template.jsx';
import LeftHomePanel from './Home/LeftHomePanel.jsx';
import RightHomePanel from './Home/RightHomePanel.jsx';

const Home = () => {

    return (
        <HomeStyled className='Home'>
            {/* <Template
                title='Welcome'
                aside={ false }
                > */}
            <div className="columns">
                <div className="column column1">
                    <LeftHomePanel />
                </div>
                <div className="column column2">
                    <RightHomePanel/>
                </div> 
            </div>
            {/* </Template>  */}
        </HomeStyled>
    );
}

export default Home;

const HomeStyled = styled.div`
        .columns {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

        .column {
            padding: 20px;
        }

        .column1 {
            width: 30%;
        }
        .column2 {
            width: 55%;
        }

    }
`;