import "./Plaid.scss"
import PlaidGif from "../../../assets/Plaid.gif"
import { FilterNoneSharp } from "@mui/icons-material"
export default function Plaid() {
    return (
        <div className="Plaid" id="Plaid">
            <div className="top">
                <h1>Plaid Integration</h1>
            </div>
            <div className="wrapper">
                <div className="left">
                    <FilterNoneSharp className="icon" sx={{
                        color: 'white',
                        fontSize: 50
                    }} />
                    <h1>Plaid allows user to be able to link multiple brokerages with our app</h1>
                </div>
                <div className="right">
                    <img src={PlaidGif} alt="" ></img>
                </div>
            </div>

        </div>
    )
}