import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

/* Components ---------------------------*/
import BidManager from './BidManager/BidManager.jsx';
import Lots from './Lots/Lots.jsx';
import BidThanks from './BidThanks.jsx';

const Auction = () => {

    const { user } = useSelector((state) => state);

    return (
        <AuctionStyled className='Auction'>
                <div className="tours-title">
                    <h2>Tours</h2>
                </div>
                {
                    !user.isLoggedIn &&
                    <div className="login-alert">
                        <h3>Log in to add tours to your cart</h3>
                    </div>
                }
                <Switch>
                    <Route path='/auction/bids' component={ BidManager } />
                    <Route path='/auction/thanks' component={ BidThanks } />
                    <Route path='/auction' component={ Lots } exact />
                </Switch> 
        </AuctionStyled>
    );
}

export default Auction;

const AuctionStyled = styled.div`
    .tours-title {
        text-align: center;
    }
    
    .login-alert {
        text-align: center;
    }
`;