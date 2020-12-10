import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

/* Components ---------------------------*/
import Bids from './Bids/Bids.jsx';

const BidManager = () => {

    const { bidManager: { current: { bids } } } = useSelector ((state) => state);

    return (
        <BidManagerStyled className='BidManager'>
                <div className="my-cart">
                <h3>Your Cart</h3> 

                {
                    (bids && bids.length > 0)
                    ? <Bids bids={ bids }/>
                    : 'Currently you have no lots in your Bid Manager.'
                }
            </div>
        </BidManagerStyled>
    );
}

export default BidManager;

const BidManagerStyled = styled.div`
    .my-cart {
        text-align: center;
        /* margin: 0 40px; */
    }
`;