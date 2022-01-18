import "./Plaid.scss"
import PlaidGif from "../../../assets/Plaid.gif"
export default function Plaid() {
    return (
        <div className="Plaid" id="Plaid">
            <div className="left">
                <img src={PlaidGif} alt="" ></img>
            </div>
            <div className="right">
                <h1>Hello world this is supposed to be one of the desctiptions</h1>
            </div>
        </div>
    )
}