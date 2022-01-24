import React from 'react'
import "./Watchlist.scss"
import { fontWeight } from "@mui/system"
import watchlistDemo from "../../../../assets/WatchlistFunctionality.gif"
import {List, Inventory2, PriceChange} from "@mui/icons-material"

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
                        <List className="icon" sx={{color:'White',fontSize:75}}/>
                        <h2>The watchlist is a list of stocks that the user can add stocks to.</h2>
                    </div>
                    <div className="itemContainer">
                        <Inventory2 className="icon" sx={{color:'White', fontSize:75}}/>
                        <h2>A user can add stocks by selecting the "add stock to watchlist" when viewing a stock on its page.</h2>
                    </div>
                    <div className="itemContainer">
                        <PriceChange className="icon" sx={{color:'White', fontSize:75}}/>
                        <h2>Information about current price, percent changes, and price changes can be viewed on the watchlist table view.</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}