import React from 'react'
import "./StockPage.scss"
import Demo from "../../../assets/StockPage.gif"
import compareDemo from "../../../assets/CompareStockPage.gif"
import { ShowChart, AttachMoney, CompareArrows, CalendarToday } from '@mui/icons-material'
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
export default function StockPage() {
    const matches = useMediaQuery("(min-width:800px)");
    const getStyle = (isMatch) => {
        return isMatch ? style.default : style.sm
    };
    return (
        <div className="StockPage" id="StockPage">
            <div className="top">
                <h2>
                    Stock Page & Comparing Stocks
                </h2>
            </div>
            <div className="wrapper">
                <div className="imgWrapper">
                    <div className="left">
                        <img src={Demo} alt="" className='logo' />
                    </div>
                    <div className="left">
                        <img src={compareDemo} alt="" className='logo' />
                    </div>
                </div>

                <div className="right">
                    <div className="itemContainer">
                        <ShowChart className="icon" sx={getStyle(matches)} />
                        <h2>
                            View over 18000+ stocks on the market for more information on the ones you want to see.
                        </h2>
                    </div>
                    <div className="itemContainer">
                        <CalendarToday className="icon" sx={getStyle(matches)} />
                        <h2>Line charts, candlesticks and key data are readily displayed to give an extra boost on information.</h2>
                    </div>
                    <div className="itemContainer">
                        <AttachMoney className="icon" sx={getStyle(matches)} />
                        <h2>In-depth analysis on stocks being undervalued, trend ratings, SMA and monthly profits available!</h2>
                    </div>
                    <div className="itemContainer">
                        <CompareArrows className="icon" sx={getStyle(matches)} />
                        <h2>Compare between different stocks on the market to get a better understanding on where to invest.</h2>
                    </div>

                </div>
            </div>
        </div>
    )
}
