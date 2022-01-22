import "./Menu.scss"
export default function Menu({ menuOpen, setMenuOpen }) {
    return (
        <div className={"menu " + (menuOpen && "active")}>
            <ul>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#Intro">Intro</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#Overview">Overview</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#Breakdown">Breakdown</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#Developers">Developers</a>
                </li>
            </ul>
        </div>
    )
}