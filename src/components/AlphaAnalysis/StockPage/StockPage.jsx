import React from 'react'
import "./StockPage.scss"
import Logo from "../../../assets/Alpha.png"
import Demo from "../../../assets/StockPage.gif"
import compareDemo from "../../../assets/CompareStockPage.gif"
import {ShowChart, AttachMoney, CompareArrows,CalendarToday} from '@mui/icons-material'

export default function StockPage() {
    return (
        <div className="StockPage" id="StockPage">
            <div className="top">
                <h1>
                    Stock Page and Comparing Stocks
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
                        <img src={compareDemo} alt="" className='logo' />
                    </div>
                </div>
                <div className="right">
                    <div className="itemContainer">
                        <ShowChart className="icon" sx={{color:'White',fontSize:75}}/>
                        <h2>
                            View over 18000+ stocks on the market for more information on the ones you want to see.
                        </h2>
                    </div>
                    <div className="itemContainer">
                        <CalendarToday className="icon" sx={{color:'White',fontSize:75}}/>
                        <h2>Line charts, candlesticks and key data are readily displayed to give an extra boost on information.</h2>
                    </div>
                    <div className="itemContainer">
                        <AttachMoney className="icon" sx={{color:'White',fontSize:75}}/>
                        <h2>In-depth analysis on stocks being undervalued, trend ratings, SMA and monthly profits available!</h2>
                    </div>
                    <div className="itemContainer">
                        <CompareArrows className="icon" sx={{color:'White',fontSize:75}}/>
                        <h2>Compare between different stocks on the market to get a better understanding on where to invest.</h2>
                    </div>

                </div>
            </div>
        </div>
    )
}
