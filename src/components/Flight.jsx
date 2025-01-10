import React from "react";
import { Link } from "react-router-dom";

const Flight = ({flight}) => {
    return (
        <div className="flight-card">
            <div>
                <div className="flight-name">{flight.flightName[0]}</div>
            </div>

            <div>
                <div>{flight.startPlaceTime}</div>
                <div>{flight.startPlace}</div>
            </div>

            <div>
                <div>{flight.flightName}</div>
                <div>{flight.flightId}</div>
                <div>{flight.stops}</div>
            </div>

            <div>
                <div>{flight.destinationPlaceTime}</div>
                <div>{flight.destinationPlace}</div>
            </div>

            <div>
                <Link to='/flight-booking'>
                    <button>RS. {flight.price}</button>
                </Link>
            </div>
        </div>
    )
}

export default Flight;