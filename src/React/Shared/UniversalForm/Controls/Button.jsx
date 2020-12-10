import React from 'react';
import styled from 'styled-components';

const Button = ({
    id,
    children, 
    onClick,
    type= 'button',
    className='',
    unstyled=false,
}) => {

    const ButtonStyled = (unstyled) ? ButtonUnstyled : ButtonWithStyles;

    return (
        <ButtonStyled 
            id={ id }
            className={`Button ${className} ` }
            onClick={ onClick }
            type={ type }
        >
            { children } 
        </ButtonStyled>
    );
}

export default Button;

const ButtonWithStyles = styled.button`
    background-color: #3f51b5;

    display: inline-block;
    margin: 10px;
    padding: 10px 15px;
    border-radius: 10px;
    color: #fff;

    border: none;
    outline: none;

    box-shadow: 0px 2px 4px rgba(0,0,0,.25);

    &:hover {
        box-shadow: 0px 0px 5px rgba(0,0,0,.3);
        background-color: #0ca999;
        cursor: pointer;
    }

    &:active {
        box-shadow: 0px 0px 5px rgba(0,0,0,.3);
    }

    &.focus {
        background-color: #ee5b37;
    }
`;

const ButtonUnstyled = styled.button`
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
    &:active, &:focus {
        outline: solid 1px blue;
    }
`;