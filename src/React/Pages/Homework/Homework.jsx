import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

/* Components ---------------------------*/


const Homework = () => {

    // ... functional component logic

    return (
        <HomeworkStyled>
            <div className="about-title">
                <h2> About Us</h2>
            </div>
            <div className="about-columns">
                <div className="about-column about-column1">
                    <Link to='/'>
                        <img src="/assets/img/tourly-friends.png" alt="Tourly founders"/>
                    </Link>   
                </div>
                <div className="about-column about-column2">
                    <div className="paragraphs">
                        <p>
                            With Tourly, book a tour with a world-class guide alone with a group of fellow fun adventurers. Discover the world in the most exciting and immersive way imaginable.
                        </p>
                        <p>
                            With Tourly, book a tour with a world-classguide alone with a group of fellow fun adventurers. Discover the world in the most exciting and immersive way imaginable.
                        </p>
                    </div>
                </div> 
            </div>
        </HomeworkStyled>
    )
}

export default Homework;

const HomeworkStyled = styled.div`
    .about-title {
        text-align: center;
    }

    .about-columns {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

        .about-column {
            padding: 20px;
        }

        .about-column1 {
            width: 45%;
        }

        .about-column2 {
            width: 30%;
            font-size: 17px;
            margin-top: 50px;
            line-height: 20px;
        }

        .paragraphs {
            background-color: #FCF6ED;
            padding: 15px;
        }

    }
`;