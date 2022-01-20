import React from 'react'
import "./Search.scss"
import searchDemo from "../../../assets/SearchFunctionality.gif"

export default function Search() {
    return (
        <div className="Search" id="Search">
            <div className="wrapper">
                <div className="left">
                    <div className="itemContainer">
                        <img src={searchDemo} alt="" className='logo' />
                    </div>
                </div>
                <div className="right">
                    <div className="itemContainer">
                        <h2> The search functionality works by creating a query to the Alpha Stock database after each
                            letter typed after the first letter. Most major stocks have logos that are also pulled from
                            the database.
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    )
}