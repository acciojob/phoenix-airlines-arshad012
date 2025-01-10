
import React from "react";
import './../styles/App.css';
import { BrowserRouter,HashRouter, Switch, Route } from 'react-router-dom';
import Home from "../pages/Home";
import FlightSearch from "../pages/FlightSearch";
import FlightBooking from "../pages/FlightBooking";
import Confirmation from "../pages/Confirmation";

const App = () => {
  return (
    <div>
    <nav>Flight Booking App</nav>
    <HashRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/flight-search' component={FlightSearch} />
        <Route path='/flight-booking' component={FlightBooking} />
        <Route path='/confirmation' component={Confirmation} />
      </Switch>
    </HashRouter>
    </div>
  )
}

export default App;