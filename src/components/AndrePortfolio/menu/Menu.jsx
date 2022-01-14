import "./Menu.scss"
export default function Menu({ menuOpen, setMenuOpen }) {
    return (
        <div className={"menu " + (menuOpen && "active")}>
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