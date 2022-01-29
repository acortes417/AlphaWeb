import "./topbar.scss"
import { Person, Email } from '@mui/icons-material';
export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" >AC</a>
                    <div className="itemContainer">
                        <Person className="icon" />
                        <span>+1(714)-588-9890</span>
                    </div>
                    <div className="itemContainer">
                        <Email className="icon" />
                        <span>acortes417@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>

            </div>
        </div>
    )
}