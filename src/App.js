import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/index';
import PropertyDetails from './components/PropertyDetails/PropertyDetails'; // Import the PropertyDetails component
import Login from './components/Login/Login'; // Import the Login component
import Listings from './components/Listings';


function App() {
    const [showLogin, setShowLogin] = useState(false);

    const toggleLogin = () => {
        setShowLogin(!showLogin);
    };

    return (
        <Router>
            <div className="App">
                <Switch>
                <Route path="/home">
                        <Nav />
                        <Hero />
                        {/* <Listings /> */}
                    </Route>
                    <Route path="/login">

                        <Header />
                        <Hero />
                        {/* Place your Login component here */}
                    </Route>
                    <Route path="/user">
                        <Header />
                        <Hero />
                    </Route>
                    <Route path="/propertydetails/:id"> {/* Route for the property details page */}
                        <Header />
                        <PropertyDetails />
                    </Route>
                    
                    <Route path="/">
                        <Nav toggleLogin={toggleLogin} />
                        <Hero />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
