import "./AlphaHome.scss"
import Topbar from "../topbar/Topbar"
import Menu from "../menu/Menu"
import Intro from "../Intro/Intro"
import Overview from "../Overview/Overview"
import MenuScreen from "../MenuScreen/MenuScreen"
import { useState } from "react"
import Portfolio from "../Portfolios/Portfolios"
export default function AlphaHome() {
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <div className="alphaHome">
            <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <div className="sections">
                <Intro />
                <Overview />
                <MenuScreen />
                <Portfolio />
            </div>
        </div>
    )
}