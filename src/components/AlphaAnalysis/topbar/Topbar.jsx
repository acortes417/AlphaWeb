import "./topbar.scss"
export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <img src="https://t4.ftcdn.net/jpg/03/81/04/27/360_F_381042793_8YESDNPxXds2UCeZ1BEDXOudHQOWF7eE.jpg" href="#intro" className="logo" />
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