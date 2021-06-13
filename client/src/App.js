import React from 'react';
import {Switch, Route} from 'react-router-dom';

/* COMPONENTS */
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Book from './Components/Book';
import About from './Components/About';

/* STYLES */
import './Styles/app.scss';

const App = () => {
    return(
        <div className="app-main">
            <Navbar />
            <Switch>
                <Route path="/home">
                    <Home />
                </Route>
                <Route path="/book">
                    <Book />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
            <Footer />
        </div>
    )
}

export default App;