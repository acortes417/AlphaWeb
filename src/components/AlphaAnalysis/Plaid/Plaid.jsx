import "./Plaid.scss"
import PlaidGif from "../../../assets/Plaid.gif"
import portfolioGif from "../../../assets/Portfolio.gif"
import { AddBoxOutlined, ShieldOutlined, AnalyticsOutlined } from "@mui/icons-material"
import { useMediaQuery } from "@mui/material";
const style = {
    default: {
        color: 'white',
        fontSize: 75
    },
    sm: {
        color: 'white',
        fontSize: 35
    }
}
export default function Plaid() {
    const matches = useMediaQuery("(min-width:768px)");
    const getStyle = (isMatch) => {
        return isMatch ? style.default : style.sm
    };
    return (
        <div className="Plaid" id="Plaid">
            <div className="top">
                <h2>Plaid Integration</h2>
            </div>
            <div className="wrapper">
                <div className="imgWrapper">
                    <div className="left">
                        <img src={PlaidGif} alt="" ></img>
                    </div>
                    <div className="left">
                        <img src={portfolioGif} alt="" className='logo' />
                    </div>
                </div>

                <ul>
                    <li>
                        <AddBoxOutlined className="icon" sx={getStyle(matches)} />
                        <h1>Plaid allows users to link multiple brokerages with our app using thier secure token system</h1>
                    </li>
                    <li>
                        <ShieldOutlined className="icon" sx={getStyle(matches)} />
                        <h1>Using Plaid we dont store any credentials keeping our users information secure</h1>
                    </li>
                    <li>
                        <AnalyticsOutlined className="icon" sx={getStyle(matches)} />
                        <h1>Using webhooks plaid updates us on our user's investments which we use to keep track of holdings and transaction data in our database</h1>
                    </li>
                </ul>

            </div>

        </div>
    )
}