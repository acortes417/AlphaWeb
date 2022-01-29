import "./Menu.scss"
import { Person, Email } from '@mui/icons-material';
export default function Menu({ menuOpen, setMenuOpen }) {
    return (
        <div className={"menu " + (menuOpen && "active")}>
            <div className="top">
                <div className="itemContainer">
                    <Person className="icon" />
                    <span>+1(714)-588-9890</span>
                </div>
                <div className="itemContainer">
                    <Email className="icon" />
                    <span>acortes417@gmail.com</span>
                </div>
            </div>
            <ul>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#intro">Intro</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#AboutMe">About me</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#works">Work</a>
                </li>
            </ul>
        </div>
    )
}