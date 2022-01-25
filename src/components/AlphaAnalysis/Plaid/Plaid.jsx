import "./Plaid.scss"
import PlaidGif from "../../../assets/Plaid.gif"
import portfolioGif from "../../../assets/Portfolio.gif"
import { AddBoxOutlined, ShieldOutlined, AnalyticsOutlined } from "@mui/icons-material"
export default function Plaid() {
    return (
        <div className="Plaid" id="Plaid">
            <div className="top">
                <h1>Plaid Integration</h1>
            </div>
            <div className="wrapper">
                <div className="left">
                    <div className="itemContainer">
                        <img src={PlaidGif} alt="" ></img>
                    </div>

                </div>
                <div className="left">
                    <div className="itemContainer">
                        <img src={portfolioGif} alt="" className='logo' />
                    </div>
                </div>
                <ul>
                    <li>
                        <AddBoxOutlined className="icon" sx={{
                            color: 'white',
                            fontSize: 75
                        }} />
                        <h1>Plaid allows users to link multiple brokerages with our app using thier secure token system</h1>
                    </li>
                    <li>
                        <ShieldOutlined className="icon" sx={{
                            color: 'white',
                            fontSize: 75
                        }} />
                        <h1>Using Plaid we dont store any credentials keeping our users information secure</h1>
                    </li>
                    <li>
                        <AnalyticsOutlined className="icon" sx={{
                            color: 'white',
                            fontSize: 75
                        }} />
                        <h1>Using webhooks plaid updates us on our user's investments which we use to keep track of holdings and transaction data in our database</h1>
                    </li>
                </ul>

            </div>

        </div>
    )
}