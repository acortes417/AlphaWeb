import React from 'react'
import "./MarketWatch.scss"
import Logo from "../../../assets/Alpha.png"
import Demo from "../../../assets/MarketWatch.gif"
import Main from "../../../assets/MainPage.gif"
import {Whatshot,Storefront,Sort,EventNote} from "@mui/icons-material"

export default function MarketWatch() {
    return (
        <div className="MarketWatch" id="MarketWatch">
            <div className="top">
                    <h1>
                        Market Watchlists
                    </h1>
                </div>
            <div className="wrapper">
                
                <div className="left">
                    <div className="itemContainer">
                        <img src={Demo} alt="" className='logo' />
                    </div>
                </div>
                <div className="left">
                    <div className="itemContainer">
                        <img src={Main} alt="" className='logo' />
                    </div>
                </div>
                <div className="right">
                    <div className="itemContainer">
                        <Whatshot className="icon" sx={{color:'White',fontSize:75}}/>
                        <h2>Get the latest trending tickers on the market for each day.</h2>
                    </div>
                    <div className="itemContainer">
                        <Storefront className="icon" sx={{color:'White',fontSize:75}}/>
                        <h2>Get four main ETFs information to see which ETF is performing better than the others.</h2>
                    </div>
                    <div className="itemContainer">
                        <Sort className="icon" sx={{color:'White',fontSize:75}}/>
                        <h2>Sort by many different categories to get a better look on what each stock is doing well or poorly in.</h2>
                    </div>
                    <div className="itemContainer">
                        <EventNote className="icon" sx={{color:'White',fontSize:75}}/>
                        <h2>Check the calendar for future earnings and their estimated EPS/revenue, or past earnings.</h2>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
