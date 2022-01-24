import React from 'react'
import "./Search.scss"
import searchDemo from "../../../../assets/SearchFunctionality.gif"
import {Search, ShowChart, SortByAlpha} from '@mui/icons-material'

export default function SearchClass() {
    return (
        <div className="Search" id="Search">
            <div className='top'>
                <h1>
                    Searching
                </h1>
            </div>
            <div className="wrapper">
                <div className="left">
                    <div className="itemContainer">
                        <img src={searchDemo} alt="" className='logo'/>
                    </div>
                </div>
                <div className="right">
                    <div className="itemContainer">
                        <Search className="icon" sx={{color:'White',fontSize:75}}/>
                        <h2>Our search functionality works by querying our Alpha Stock Database of stocks.</h2>
                    </div>
                    <div className="itemContainer">
                        <SortByAlpha className="icon" sx={{color:'White', fontSize:75}}/>
                        <h2>After each letter is typed, a new query is sent, creating a filter effect.</h2>
                    </div>
                    <div className="itemContainer">
                        <ShowChart className="icon" sx={{color:'White', fontSize:75}}/>
                        <h2>Most major stocks have logos that are also pulled from the database.</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}