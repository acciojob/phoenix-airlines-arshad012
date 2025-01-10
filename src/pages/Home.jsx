
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='home-page'>
            <h1>Welcome to Flight Booking App</h1>
            <Link to='/flight-search'>
                <button>SEARCH FLIGHTS HERE</button>
            </Link>
        </div>
    )
}

export default Home;