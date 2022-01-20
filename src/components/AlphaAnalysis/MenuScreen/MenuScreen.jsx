import "./MenuScreen.scss"
import InnerMenu from "../InnerMenu/InnerMenu"
export default function MenuScreen() {
    return (
        <div className="MenuScreen">
            <div className="wrapper">
                <InnerMenu />
            </div>
        </div>
    )
}