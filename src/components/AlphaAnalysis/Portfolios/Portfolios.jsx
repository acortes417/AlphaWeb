import "./Portfolios.scss"
import Profile from '../../../assets/Profile_Pic.png'
import { Link } from 'react-router-dom'
const styles = {
    link: {
        textDecoration: "none"
    }
}
export default function Portfolio() {
    return (
        <div className="Portfolio" id="Developers">
            <div className="topWrapper">
                <h1>Meet the Developers</h1>
            </div>
            <div className="wrapper">
                <Link to="/Andre" className="andre" style={styles.link}>
                    <div className="avatar">
                        <div className="top">
                            <img className="avatar-image" alt="" src={Profile} />
                        </div>
                        <div className="bottom">
                            <h1>Andre Cortes</h1>
                            <h2>B.S Computer Science, California University of Long Beach</h2>
                        </div>

                    </div>
                </Link>
                <div className="michael">
                    <div className="avatar">
                        <div className="top">
                            <img className="avatar-image" alt="" src="data:image/jpeg;base64,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" />
                        </div>
                        <div className="bottom">
                            <h1>Michael Maalouf</h1>
                            <h2>Studying at California University of Long Beach</h2>
                        </div>
                    </div>
                </div>
                <div className="lawrence">
                    <div className="avatar">
                        <div className="top">
                            <img className="avatar-image" alt="" src="https://github.com/acortes417/AlphaWeb/blob/lawrence's-branch/src/assets/lawrenceTempPic.jpeg?raw=true" />
                        </div>
                        <div className="bottom">
                            <h1>Lawrence Lim</h1>
                            <h2>Studying at California University of Long Beach</h2>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}