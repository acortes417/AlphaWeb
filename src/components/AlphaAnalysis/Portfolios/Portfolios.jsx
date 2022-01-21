import "./Portfolios.scss"
import { AccountCircleOutlined } from "@mui/icons-material"
export default function Portfolio() {
    return (
        <div className="Portfolio">
            <div className="topWrapper">
                <h1>Meet the Developers</h1>
            </div>
            <div className="wrapper">
                <div className="andre">
                    <div className="avatar">
                        <div className="top">
                            <img className="avatar-image" alt="" src="https://media-exp1.licdn.com/dms/image/C5603AQHUAj2mtcsRYw/profile-displayphoto-shrink_200_200/0/1615051317515?e=1646870400&v=beta&t=Ac7CRjX70540pfqezqHMHEOdvasDgHXBpGgoo9MDkC8" />
                        </div>
                        <div className="bottom">
                            <h1>Andre Cortes</h1>
                        </div>
                    </div>
                </div>
                <div className="michael">
                    <div className="avatar">
                        <div className="top">
                            <img className="avatar-image" alt="" src="https://media-exp1.licdn.com/dms/image/C5635AQGy-8_-8tD-pg/profile-framedphoto-shrink_200_200/0/1617672769411?e=1642813200&v=beta&t=5dGKAlwkV8bJ98mjQM-2lXg3xLPpP12x_cuPxdUsIuQ" />
                        </div>
                        <div className="bottom">
                            <h1>Michael Maalouf</h1>
                        </div>
                    </div>
                </div>
                <div className="lawrence">
                    <div className="avatar">
                        <div className="top">
                            <AccountCircleOutlined sx={{ color: "white" }} className="icon" />
                        </div>
                        <div className="bottom">
                            <h1>Lawrence Lim</h1>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}