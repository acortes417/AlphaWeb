import "./AlphaHome.scss"
import Topbar from "../topbar/Topbar"
import Menu from "../menu/Menu"
import Intro from "../Intro/Intro"
import Watchlist from "../menu/watchlist/Watchlist"
import Overview from "../Overview/Overview"
import { useState } from "react"
export default function AlphaHome() {
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <div className="alphaHome">
            <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <div className="sections">
                <Intro />
                <Overview />
                <Watchlist/>
                {/*  
                // description (Andre)
                //adding brokerages(andre)
                //search functionality(michael)
                //stock page & stock page(lawrence)
                //watchlists (michael)
                //market watch (lawrence)
                */}
            </div>
        </div>
    )
}