import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Confirmation = () => {
    return (
        <div>
            <h1>Thank you for the Booking. Click the below button to return to home page</h1>
            
            <Link to='/'>
                <button>BACK TO HOME</button>
            </Link>
        </div>
    )
}

export default Confirmation;