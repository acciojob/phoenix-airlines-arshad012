import React, { useState } from "react";
import { Link } from "react-router-dom";
import Flight from "../components/Flight";

const flightsData = [
    {
        startPlace:'Mumbai',
        startPlaceTime: '04:00',
        flightName:'Air India',
        flightId:'AI-275',
        stops: 'No stops',
        destinationPlace:'Bengloru',
        destinationPlaceTime:'06:00',
        price: '3,600'
    },
    {
        startPlace:'Mumbai',
        startPlaceTime: '04:00',
        flightName:'Air India',
        flightId:'AI-275',
        stops: 'No stops',
        destinationPlace:'Bengloru',
        destinationPlaceTime:'06:00',
        price: '3,600'
    }
]

const FlightSearch = () => {
    const [showBothDate, setShowBothDate] = useState(false);
    const [data, setData] = useState([]);

    const handleChange = (e) => {
        const type = e.target.id;

        if(type == 'one-way') {
            setShowBothDate(false);
        } else {
            setShowBothDate(true);
        }
    }

    return (
        <div className="flight-search-page">
            <div>
                <input type="radio" id="one-way" name="trip" onChange={handleChange} defaultChecked />
                <label htmlFor="one-way">One Way</label>
                <input type="radio" id="round-trip" name="trip" onChange={handleChange} />
                <label htmlFor="round-trip">Round Trip</label>
            </div>

            <div>
                <select id="" className="select">
                    <option value="">Source City</option>
                    <option value="">Mumbai</option>
                    <option value="">Haydrabad</option>
                    <option value="">Agra</option>
                </select>
            </div>
            
            <div>
                <select id="" className="select">
                    <option value="">Destination City</option>
                    <option value="">Kolkata</option>
                    <option value="">Delhi</option>
                    <option value="">Goa</option>
                </select>
            </div>

            <div>
                <p>Journey date</p>
                <input type="date" className="select" />
            </div>
            
            {
                showBothDate &&
                <div>
                    <p>Return date</p>
                    <input type="date" className="select" />
                </div>
            }

            <button onClick={() => setData(flightsData)}>SEARCH FLIGHT</button>

            <div className="all-details">
                {
                    data.map((flight,i) => <Flight key={i} flight={flight} />)
                }
            </div>
        </div>
    )
}

export default FlightSearch;