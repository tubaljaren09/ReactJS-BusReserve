import React from 'react';

/* IMAGES */
import Bus from '../Images/pics02.jpg';

const Home = () => {
    return(
        <div className="home-main">
            <div className="home-container">
                <div className="home-content">
                    <h1>Bus Ticket Reservation made easier</h1>
                    <h2>WE AIM TO PROVIDE MORE CONVENIENT TICKET BOOKING.</h2><br/>
                    <img src={Bus}/><br/>
                    <p>In compliance to minimum health protocols, temperature checks are being implemented to all passengers. Those with<br/>temperatures above 37.6 will not allowed to board the bus and will be advised to seek medical help. Wearing of face<br/>masks and face shields at all times is required.</p><br/>
                    <button>BOOK TICKET</button>
                </div>
            </div>
        </div>
    )
}

export default Home;