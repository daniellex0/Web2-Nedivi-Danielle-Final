import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Nav = () => {

    return (
        <NavStyled className='Nav'>
            <NavLink to='/' exact>Home</NavLink> 
            <NavLink to='/auction'>Book a Tour</NavLink> 
            <NavLink to='/homework'>About</NavLink> 
            <NavLink to='/contact'>Contact</NavLink> 
        </NavStyled>
    );
}

export default Nav;

const NavStyled = styled.nav`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    padding-top: 20px;
    padding-bottom: 20px;
    border-bottom: none;

    a {
        display: block;
        flex: 0 0 150px;

        margin-right: 5px;
        border-bottom: none;

        font-size: 16px;
        text-align: center;
        text-decoration: none;
        height: 40px;
        line-height: 40px;

        &:hover {
            border-bottom: 3px solid #00d4c4;
            color: #00d4c4;
        }

        &.active {
            border-bottom: 3px solid #03a9f4;
            color: #03a9f4;
        }

        &.last-child {
            margin-right: 0px;
        }
    }
`;