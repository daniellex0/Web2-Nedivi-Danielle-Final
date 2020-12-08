import React from 'react';
import styled from 'styled-components';

/* Components ---------------------------*/
import Essays from './Essays.jsx';
import Template from '../../Shared/Template.jsx';

const Homework = () => {

    // ... functional component logic

    return (
        <HomeworkStyled>
            <Template
                title='Welcome'
                aside={ false } 
                >
                </Template>
        </HomeworkStyled>
    );
}

export default Homework;

const HomeworkStyled = styled.div`
    padding: 20px;
    border: dashed teal 5px;
    background-color: #ccc;
    
`;
