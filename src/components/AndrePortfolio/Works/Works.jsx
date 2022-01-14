import "./Work.scss"
import PortfolioList from "../portfolioList/PortfolioList";
import { useEffect, useState } from "react";
export default function Work() {
    const [selected, setSelected] = useState("mobile");
    const [data, setData] = useState([])
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
                    <img alt="" src="https://images.ctfassets.net/zucqsg1ttqqy/HuYzMmCm5XGPa9iqN0L9f/071fcef90cfbdae244ed76e5ce7d7448/5f4e9e5bb6d6cf9707de2396_plaid-exchange-billBuddy-Sept01.gif?q=70"></img>
                </div>
                <div className="item">
                    <h3>Web App</h3>
                    <img alt="" src="https://images.ctfassets.net/zucqsg1ttqqy/HuYzMmCm5XGPa9iqN0L9f/071fcef90cfbdae244ed76e5ce7d7448/5f4e9e5bb6d6cf9707de2396_plaid-exchange-billBuddy-Sept01.gif?q=70"></img>
                </div>
            </div>
        </div>
    )
}