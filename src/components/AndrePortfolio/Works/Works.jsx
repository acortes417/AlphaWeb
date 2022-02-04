import "./Work.scss"
import PortfolioList from "../portfolioList/PortfolioList";
//import logo from "../../../assets/Alpha.png"
import { useEffect, useState } from "react";
//import { Link } from 'react-router-dom'
import { AlphaData, WebPageData, Netflix } from "../WorkdsData/WorksData";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material"
import { useMediaQuery } from "@mui/material";
// const styles = {
//     link: {
//         textDecoration: "none"
//     }
// }
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
export default function Work() {

    const matches = useMediaQuery("(min-width:768px)");
    const getStyle = (isMatch) => {
        return isMatch ? styles.normal : styles.small
    };
    const handleClick = (way) => {
        way === "left" ? setCurrSlide(currSlide > 0 ? currSlide - 1 : data.length - 1) :
            setCurrSlide(currSlide < data.length - 1 ? currSlide + 1 : 0)
    }
    const [currSlide, setCurrSlide] = useState(0);
    const [selected, setSelected] = useState("mobile");
    const [data, setData] = useState([])
    const list = [
        {
            id: "mobile",
            title: "Stock App",
        },
        {
            id: "web",
            title: "Static Web Page",
        },
        {
            id: "home netflix",
            title: "React Native App",
        },
    ];
    useEffect(() => {
        switch (selected) {
            case "mobile":
                setData(AlphaData);
                break;
            case "web":
                setData(WebPageData);
                break;
            case "home netflix":
                setData(Netflix);
                break;
            default:
                setData(AlphaData);

        }
        setCurrSlide(0)
    }, [selected, setCurrSlide])
    return (

        <div className="works" id="works">
            <div className="top">
                <h1>My Projects</h1>
                <ul>
                    {list.map(item => (
                        <PortfolioList
                            title={item.title}
                            active={selected === item.id}
                            setSelected={setSelected}
                            id={item.id}
                        />
                    ))}
                </ul>
            </div>

            <div className="bottom">
                <div className="slider" style={{ transform: 'translateX(-' + currSlide * 100 + 'vw)' }}>
                    {data.map((d) => (
                        <div className="container">
                            <div className="item">
                                <h1>{d.title}</h1>
                                <h2>{d.description}</h2>
                                <h2>{d.description2}</h2>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <ArrowBackIos sx={getStyle(matches)} className="arrow left" alt="" onClick={() => handleClick("left")} />
            <ArrowForwardIos sx={getStyle(matches)} className="arrow right" alt="" onClick={() => handleClick("right")} />
        </div>
    )
}