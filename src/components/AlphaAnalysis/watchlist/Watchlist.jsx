import React from 'react'
import "./Watchlist.scss"
import watchlistDemo from "../../../assets/watchlist.gif"

import { List, Inventory2, PriceChange } from "@mui/icons-material"
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
export default function Watchlist() {
    const matches = useMediaQuery("(min-width:768px)");
    const getStyle = (isMatch) => {
        return isMatch ? style.default : style.sm
    };
    return (
        <div className="Watchlist" id="Watchlist">
            <div className="top">
                <h1>
                    The Watchlist
                </h1>
            </div>
            <div className="wrapper">
                <div className="left">
                    <div className="imgWrapper">
                        <img src={watchlistDemo} alt="" />
                    </div>
                </div>
                <ul >
                    <li>
                        <List className="icon" sx={getStyle(matches)} />
                        <h1>A Real time watchlist was created so users can keep track of current or future inesments</h1>
                    </li>
                    <li>
                        <Inventory2 className="icon" sx={getStyle(matches)} />
                        <h1>A user can add stocks by selecting the "add stock to watchlist" when viewing a stock on its page as well as remove them if no longer needed.</h1>
                    </li>
                    <li >
                        <PriceChange className="icon" sx={getStyle(matches)} />
                        <h1>Information about current price, percent changes, and price changes can be viewed on the watchlist table view.</h1>
                    </li>
                </ul>
            </div>
        </div>
    )
}