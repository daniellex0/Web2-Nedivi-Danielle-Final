import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { mq } from '../../common/mediaQueries.js';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faBars,
} from '@fortawesome/free-solid-svg-icons';

const Nav = () => {

    const [showMenu, showMenuSet] = useState(false);

    const toggleMenu = () => {
        // console.log('You clicked the hamburger', showMenu);
        showMenuSet(!showMenu);
    }

    // useEffect is for lifecycle events, like component mounted
    // When we pass empty [] it triggers component mounted
    useEffect (()=>{
        // console.log('I have mounted');

        const handleWindowSizeChange = () => {
            const isItMobile = window.matchMedia(`(max-width:499px)`);
            // console.log(isItMobile);

            showMenuSet(!isItMobile.matches);
        }

        //On Load / Component Mounts
        handleWindowSizeChange();

        //Every Time Window is resized
        window.addEventListener('resize', handleWindowSizeChange);

        //Clean Up our Listeners on dismount
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }

    },[]); // straight braces empty = component mounted

    return (
        <NavStyled className='Nav'>
                <div className="hamburger"
                onClick={ toggleMenu }
                >
                    <FontAwesomeIcon icon={ faBars } />
                </div>
                {
                    showMenu &&
                <div className='links'>
                    <NavLink to='/' exact>Home</NavLink> 
                    <NavLink to='/auction'>Book a Tour</NavLink> 
                    <NavLink to='/homework'>About</NavLink> 
                    <NavLink to='/contact'>Contact</NavLink> 
                </div>
                }
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

    .hamburger {
        position: absolute;
        left: 20px;
        top: 20px;

        cursor: pointer;

        svg {
            color: #5d36f5;
            width: 40px;
            height: auto;
        }

        display: block;

        @media ${mq.tablet} {
            display: none;
        }

    }

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
        color: #333;

        @media ${mq.tablet} {
            display: inline-block;
            width: 100px;
            line-height: 50px;
            margin-right: 10px;
            margin-left: 10px;
            margin-bottom: 0px;
        }
        @media ${mq.desktop} {
            width: 115px;
        }

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