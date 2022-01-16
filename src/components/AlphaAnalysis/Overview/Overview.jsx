import "./Overview.scss"
import { LockOpen } from "@mui/icons-material"
export default function Overview() {
    return (
        <div className="Overview" id="Overview">
            <div className="top">
                <h1>
                    Built to help Investors
                </h1>
            </div>

            <div className="bottom">
                {/* <img src="https://media.istockphoto.com/photos/mobile-phone-top-view-with-white-screen-picture-id1161116588?k=20&m=1161116588&s=612x612&w=0&h=NKv_O5xQecCHZic53onobxjqGfW7I-D-tBrzXaPbj_Q=" /> */}
                <ul>
                    <li>
                        <LockOpen sx={{
                            color: 'white',
                            fontSize: 50
                        }} />
                        <h1>
                            Using <a href="https://plaid.com/" target="_blank"> Plaid</a> we allow users
                            to securly link their brokerage accounts.
                        </h1>
                    </li>
                    <li>
                        <h1 >
                            Make personal Watchlist to monitor your plays or fut
                        </h1>
                    </li>
                    <li>
                        <h1 >
                            Link mutltiple brokerages to track all your investments in one Application
                        </h1>
                    </li>
                    <li>
                        <h1>
                            Link mutltiple brokerages to track all your investments in one Application
                        </h1>
                    </li>
                </ul>
            </div>

        </div>
    )
}