import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

/* Redux ---------------------------*/
import { useSelector } from 'react-redux';

/* Components ---------------------------*/
import Lot from './Lot.jsx';
// import AuctionNav from './AuctionNav.jsx';

const Lots = () => {

    const { auction, user } = useSelector((state) => state);

    return (
        <LotsStyled className='Lots'>
            {
                user.isLoggedIn &&
                <div className="tour-cart">
                    <NavLink className="cart" to ='/auction/bids'>
                        View Your Cart
                    </NavLink>
                </div>
            }
            <div className="lots-container">
                {
                    auction.current.lots.map((lot, idx) => {
                        return <Lot
                                    key={ idx }
                                    lot={ lot }
                                    auctionID={ auction.current.id }
                                    />
                    })
                }
            </div>
            {/* {
                user.isLoggedIn &&
                <AuctionNav />
            } */}

        </LotsStyled>
    );
}

export default Lots;

const LotsStyled = styled.div`
    .lots-container {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }

    .tour-cart {
        text-align: center;
    }

    .cart {
        font-size: 19px;
        font-weight: 700;
        text-decoration: none;
    }
`;