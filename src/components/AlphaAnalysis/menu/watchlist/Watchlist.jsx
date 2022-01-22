import React from 'react'
import "./Watchlist.scss"
import { fontWeight } from "@mui/system"
import watchlistDemo from "../../../../assets/WatchlistFunctionality.gif"

export default function Watchlist() {
    return (
        <div className="Watchlist" id="Watchlist">
            <div className="top">
                <h1>
                    The Watchlist
                </h1>
            </div>
            <div className="wrapper">
                <div className="left">
                    <div className="itemContainer">
                        <img src={watchlistDemo} alt="" className='logo'/>
                    </div>
                </div>
                <div className="right">
                    <div className="itemContainer">
                        <h2> The watchlist is a list of stocks that the user can add stocks to by selecting the "add stock to watchlist
                            button when viewing a stock on the Stock Page. Information about current price, percent changes, and price 
                            changes can be viewed on the watchlist table view.
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    )
}