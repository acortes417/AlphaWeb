import "./app.scss"
import AlphaHome from "./components/AlphaAnalysis/AlphaHome/AlphaHome"
import PortfolioContainer from "./components/AndrePortfolio/PortfolioContainer/PortfolioContainer";
import React from "react";

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
export default function App() {
    <p>My Token = {window.token}</p>
    return (
        <Router>
            <div className="app">
                <Switch>
                    <Route exact path="/">
                        <AlphaHome />
                    </Route>
                    <Route exact path="/portfolio/Andre">
                        <PortfolioContainer />
                    </Route>
                </Switch>

            </div>
        </Router>
    )
}
// hello world