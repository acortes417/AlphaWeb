import "./topbar2.scss"
const style = {
    img: {
        width: "50px",
        height: "50px",
        borderRadius: "50%",
    }
}
export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="Intro">Alpha</a>
                    <img src="https://t4.ftcdn.net/jpg/03/81/04/27/360_F_381042793_8YESDNPxXds2UCeZ1BEDXOudHQOWF7eE.jpg" style={style.img} href="#intro" alt="" />
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