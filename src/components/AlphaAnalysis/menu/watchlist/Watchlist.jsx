import React from 'react'
import "./Watchlist.scss"
import watchlistDemo from "../../../assets/WatchlistFunctionality.gif"

export default function Watchlist() {
    return (
        <div className="Watchlist" id="Watchlist">
            <div className="wrapper">
                <div className="left">
                    <div className="itemContainer">
                        <img src={watchlistDemo} alt="" className='logo'/>
                    </div>
                </div>
            </div>
        </div>
    )
}