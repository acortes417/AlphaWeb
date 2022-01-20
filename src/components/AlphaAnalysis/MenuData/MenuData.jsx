// import PlaidGif from "../../../assets/Plaid.gif"
// import Demo from "../../../assets/StockPage.gif"
// import searchDemo from "../../../assets/SearchFunctionality.gif"
// import watchlistDemo from "../../../assets/WatchlistFunctionality.gif"
// import Main from "../../../assets/MainPage.gif"

import StockPage from "../StockPage/StockPage"
import Watchlist from "../watchlist/Watchlist"
import Search from "../searchFunctionality/Search"
import MarketWatch from "../MarketWatch/MarketWatch"
import Plaid from "../Plaid/Plaid"
// export const MenuData = [
//     {
//         title: "Plaid",
//         description: "Integrating with Plaid allows useres to link multiple bokerages securely",
//         img: PlaidGif
//     },
//     {
//         title: "Market Watch",
//         description: "Using live news feed and current day market chart data we allow users to keep up to date with the current market",
//         img: Main
//     },
//     {
//         title: "Compare and View Stocks",
//         description: "Using Yahoo & Finnhub API users are able to see current data trends and chart data",
//         img: Demo
//     },
//     {
//         title: "Suggestive Search Bar",
//         description: "We developed a custom search bar using Firestore DB queries",
//         img: searchDemo
//     },
//     {
//         title: "Build a cutsom Watchlist",
//         description: "Users can make a realtime watchlist that users can use to monitor specific stocks",
//         img: watchlistDemo
//     },
// ]
export const MenuData = [
    <Plaid />,
    <MarketWatch />,
    <StockPage />,
    <Search />,
    <Watchlist />,
]