import "./PortfolioContainer.scss"
import Intro from "../intro/Intro"
import Profile from "../Profile/Profile"
import Topbar from "../topbar/Topbar"
import Works from "../Works/Works"
import Menu from "../menu/Menu"
import { useState } from "react"
export default function PortfolioContainer() {
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <div className="app">
            <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <div className="sections">
                <Intro />
                <Profile />
                <Works />
            </div>
        </div>
    )
}