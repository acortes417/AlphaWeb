import "./InnerMenu.scss"
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material"
import { MenuData } from "../MenuData/MenuData"
import { useMediaQuery } from "@mui/material";
import { useState } from "react";
const styles = {
    normal: {
        fontSize: 60,
        color: 'white'
    },
    small: {
        fontSize: 25,
        color: 'white'
    }
}

export default function InnerMenu() {
    const handleClick = (way) => {
        way === "left" ? setCurrSlide(currSlide > 0 ? currSlide - 1 : 4) :
            setCurrSlide(currSlide < MenuData.length - 1 ? currSlide + 1 : 0)
    }
    const matches = useMediaQuery("(min-width:768px)");
    const getStyle = (isMatch) => {
        return isMatch ? styles.normal : styles.small
    };
    const [currSlide, setCurrSlide] = useState(0);
    return (
        <div className="works" >
            <div className="slider" style={{ transform: 'translateX(-' + currSlide * 100 + 'vw)' }}>
                {MenuData.map((d) => (
                    <div className="container">
                        <div className="item">
                            {d}
                        </div>
                    </div>
                ))}

            </div>
            <ArrowBackIos sx={getStyle(matches)} className="arrow left" alt="" onClick={() => handleClick("left")} />
            <ArrowForwardIos sx={getStyle(matches)} className="arrow right" alt="" onClick={() => handleClick("right")} />
        </div>
    )
}