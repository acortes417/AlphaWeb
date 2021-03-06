import "./Menu.scss"
export default function Menu({ menuOpen, setMenuOpen }) {
    return (
        <div className={"menu " + (menuOpen && "active")}>
            <ul>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#Intro">Intro</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#Frontend">Portfolio</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#Watchlist">WatchList</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#StockPage">Stock Page</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#MarketWatch">Market Watch</a>
                </li>
            </ul>
        </div>
    )
}