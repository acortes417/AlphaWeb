import React from 'react'
import "./StockPage.scss"
import Logo from "../../../assets/Alpha.png"

export default function StockPage() {
    return (
        <div className="StockPage" id="StockPage">
            <div className="left">
                <div className="itemContainer">
                    <img src={Logo} alt="" className='logo' />
                </div>
            </div>
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
        </div>
    )
}
