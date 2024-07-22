import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CarPage from './pages/CarPage';
import CustomerPage from './pages/CustomerPage';
import ServicePage from './pages/ServicePage';
import LoginPage from './pages/LoginPage';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/cars" component={CarPage} />
                <Route path="/customers" component={CustomerPage} />
                <Route path="/services" component={ServicePage} />
                <Route path="/login" component={LoginPage} />
            </Switch>
        </Router>
    );
}

export default App;
