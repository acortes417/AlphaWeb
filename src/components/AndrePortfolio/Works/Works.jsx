import "./Work.scss"
import PortfolioList from "../portfolioList/PortfolioList";
import logo from "../../../assets/Alpha.png"
import { useEffect, useState } from "react";
export default function Work() {
    const [selected, setSelected] = useState("mobile");
    const [, setData] = useState([])
    const list = [
        {
            id: "mobile",
            title: "Mobile App",
        },
        {
            id: "web",
            title: "Web App",
        },

    ];
    useEffect(() => {
        switch (selected) {
            case "moble":
                setData();
                break;
            case "web":
                setData();
                break;
            default:
                setData();
        }
    }, [selected])
    return (

        <div className="works" id="works">
            <h1>Portfolio</h1>
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
            <div className="container">
                <div className="item">
                    <h3>Mobile App</h3>
                    <img alt="" src={logo}></img>
                </div>
                <div className="item">
                    <h3>Web App</h3>
                    <img alt="" src="data:image/png;base64,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"></img>
                </div>
            </div>
        </div>
    )
}