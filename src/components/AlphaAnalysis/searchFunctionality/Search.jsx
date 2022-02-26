import React from 'react'
import "./Search.scss"
import searchDemo from "../../../assets/SearchFunctionality.gif"
import { Search, ShowChart, SortByAlpha } from '@mui/icons-material'
import { useMediaQuery } from "@mui/material";
const style = {
    default: {
        color: 'white',
        fontSize: 75
    },
    sm: {
        color: 'white',
        fontSize: 40
    }
}
export default function SearchClass() {
    const matches = useMediaQuery("(min-width:800px)");
    const getStyle = (isMatch) => {
        return isMatch ? style.default : style.sm
    };
    return (
        <div className="Search" id="Search">
            <div className='top'>
                <h2>
                    Suggestive Searching
                </h2>
            </div>
            <div className="wrapper">
                <div className="left">
                    <div className="imgWrapper">
                        <img src={searchDemo} alt="" />
                    </div>
                </div>

                <ul>
                    <li>
                        <Search className="icon" sx={getStyle(matches)} />
                        <h1>Our search functionality works by querying our Alpha Stock Database of stocks.</h1>
                    </li>
                    <li>
                        <SortByAlpha className="icon" sx={getStyle(matches)} />
                        <h1>After each letter is typed, a new query is sent, creating a filter effect.</h1>
                    </li>
                    <li >
                        <ShowChart className="icon" sx={getStyle(matches)} />
                        <h1>Most major stocks have logos that are also pulled from the database.</h1>
                    </li>
                </ul>
            </div>
        </div>
    )
}