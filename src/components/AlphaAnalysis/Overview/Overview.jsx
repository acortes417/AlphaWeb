import "./Overview.scss"
import { LockOpen, FormatListBulletedSharp, LightbulbSharp, TimelineSharp } from "@mui/icons-material"
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
export default function Overview() {
    const matches = useMediaQuery("(min-width:768px)");
    const getStyle = (isMatch) => {
        return isMatch ? style.default : style.sm
    };
    return (
        <div className="Overview" id="Overview">
            <div className="top">
                <h1>
                    Built to help Investors
                </h1>
            </div>
            <div className="wrapper">
                <div className="one">
                    <LockOpen className="icon" sx={getStyle(matches)} />
                    <h1>Security</h1>
                    <h2>
                        Using <a href="https://plaid.com/" target="_blank" rel="noreferrer"> Plaid</a> we allow users
                        to securely link their brokerage accounts. No credentials are stored and there is no way for user
                        credentials to leak.
                    </h2>
                </div>
                <div className="two">
                    <FormatListBulletedSharp className="icon" sx={getStyle(matches)} />
                    <h1>
                        Customization
                    </h1>
                    <h2>
                        Make your own personal watchlist that informs you on how your investments are
                        doing today in the stock marker. We notify you every day on your top movers.
                    </h2>
                </div>
                <div className="three">
                    <LightbulbSharp className="icon" sx={getStyle(matches)} />
                    <h1>
                        Informative
                    </h1>
                    <h2>
                        Users are able to search and compare their current invesstments
                        finances. Allowing users to make informative descions on their positions.
                    </h2>
                </div>
                <div className="four">
                    <TimelineSharp className="icon" sx={getStyle(matches)} />
                    <h1>
                        Customization
                    </h1>
                    <h2>
                        Track your investment portfolio in each brokerage you link. We keep track of all your holding.
                        We aggregate your total portfolio value in one place.
                    </h2>
                </div>
            </div>
        </div>
    )
}