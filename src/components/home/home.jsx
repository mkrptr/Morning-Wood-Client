/* eslint-disable react/no-unescaped-entities */
import React from 'react';

import './home.css';
import HomePageLots from './home_page_lots/home_page_lots';

const Home = () => (
    <div>
        <div className="background-container">
            <div className="slim-container">
                <div className="present">
                    <p className="present__welcome">Welcome to Morning Wood</p>
                    <h1 className="present__logs">Fucking logs</h1>
                    <p>You don't even need them, nigga</p>
                    <button type="button" className="present__shop-button">shop now</button>
                </div>
            </div>
        </div>
        <div className="featured-wrapper">
            <h1 className="featured-text">Our featured products</h1>
            <HomePageLots />
        </div>
    </div>
);

export default Home;
