import React from 'react'
import "./MarketWatch.scss"
import Demo from "../../../assets/MarketWatch.gif"
import Main from "../../../assets/MainPage.gif"
import { Whatshot, Storefront, Sort, EventNote } from "@mui/icons-material"
import { useMediaQuery } from "@mui/material";
const style = {
    default: {
        color: 'white',
        fontSize: 75
    },
    sm: {
        color: 'white',
        fontSize: 35
    }
}
export default function MarketWatch() {
    const matches = useMediaQuery("(min-width:768px)");
    const getStyle = (isMatch) => {
        return isMatch ? style.default : style.sm
    };
    return (
        <div className="MarketWatch" id="MarketWatch">
            <div className="top">
                <h2>
                    Market Watchlists
                </h2>
            </div>
            <div className="wrapper">
                <div className="imgWrapper">
                    <div className="left">
                        <img src={Demo} alt="" className='logo' />
                    </div>
                    <div className="left">
                        <img src={Main} alt="" className='logo' />
                    </div>
                </div>

                <div className="right">
                    <div className="itemContainer">
                        <Whatshot className="icon" sx={getStyle(matches)} />
                        <h2>Get the latest trending tickers on the market for each day.</h2>
                    </div>
                    <div className="itemContainer">
                        <Storefront className="icon" sx={getStyle(matches)} />
                        <h2>Users will be able update on how the four major indices are performing in the home page</h2>
                    </div>
                    <div className="itemContainer">
                        <Sort className="icon" sx={getStyle(matches)} />
                        <h2>Custom sortable data tables were created so users more easliy keep track of thier watchlist and the general market</h2>
                    </div>
                    <div className="itemContainer">
                        <EventNote className="icon" sx={getStyle(matches)} />
                        <h2>Check the calendar for future earnings and their estimated EPS/revenue, or past earnings.</h2>
                    </div>
                </div>

            </div>
        </div>
    )
}
