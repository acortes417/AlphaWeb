import React from 'react'
import "./MarketWatch.scss"
import Logo from "../../../assets/Alpha.png"
import Demo from "../../../assets/MarketWatch.gif"
import Main from "../../../assets/MainPage.gif"

export default function MarketWatch() {
    return (
        <div className="MarketWatch" id="MarketWatch">
            <div className="wrapper">
            
                <div className="right">
                    <div className="itemContainer">
                        <img src={Logo} alt="" className='logo' />
                        <h2>This is description 1</h2>
                    </div>
                    <div className="itemContainer">
                        <img src={Logo} alt="" className='logo' />
                        <h2>This is description 2</h2>
                    </div>
                    <div className="itemContainer">
                        <img src={Logo} alt="" className='logo' />
                        <h2>This is description 3</h2>
                    </div>
                </div>
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
                
            </div>
        </div>
    )
}
