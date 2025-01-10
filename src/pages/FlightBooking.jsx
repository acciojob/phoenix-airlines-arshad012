import React from "react";
import { Link } from "react-router-dom";

const FlightBooking = () => {

    return (
        <div>
            <h1>Booking Confirmation for Flight Air India (AI-275)</h1>
            <form>
                <label htmlFor="fname">First Name *</label>
                <input type="text" id="fname" /> <br />
                
                <label htmlFor="lname">Last Name *</label>
                <input type="text" id="lname" /> <br />
                
                <label htmlFor="email">Email ID *</label>
                <input type="text" id="email" /> <br />
                
                <label htmlFor="mobile">Mobile Number *</label>
                <input type="text" id="mobile" /> <br />

                <button><Link to='/'>CONFIRM BOOKING</Link></button>
            </form>
        </div>
    )
}

export default FlightBooking;