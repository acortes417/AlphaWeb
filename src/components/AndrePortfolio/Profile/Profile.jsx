import "./profile.scss"
import { ArrowRight } from '@mui/icons-material';
import { SocialIcon } from 'react-social-icons';
import Pdf from '../../../assets/AndreCortesResume-converted.pdf'

export default function Profile() {

    return (
        <div className="profile" id="AboutMe">
            <div className="right">
                <div className="wrapper2">
                    <img className="avatar-image" alt="" src="https://media-exp1.licdn.com/dms/image/C5603AQHUAj2mtcsRYw/profile-displayphoto-shrink_200_200/0/1615051317515?e=1646870400&v=beta&t=Ac7CRjX70540pfqezqHMHEOdvasDgHXBpGgoo9MDkC8" />
                    <ul className="iconList">
                        <li>
                            <SocialIcon className="icons" bgColor="white" url="https://github.com/acortes417" />
                        </li>
                        <li>
                            <SocialIcon className="icons" bgColor="white" url="https://www.linkedin.com/in/andre-cortes-035a06157/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BlyUAhJwdR0aJfoiP4GzHSg%3D%3D" />
                        </li>
                        <li>
                            <SocialIcon className="icons" bgColor="white" url="https://www.instagram.com/andre_cortes23/" />
                        </li>
                        <li>
                            <SocialIcon className="icons" bgColor="white" onClick={() => window.open(Pdf)} />
                        </li>
                    </ul>
                    <h1 className="name-header">
                        About me
                    </h1>
                    <p className="description-text">
                        <span>I graduated with my BS in computer science in the fall of 2020.</span>
                        <span> My real journey to choosing full-stack development came with a project </span>
                        <span> called Alpha Stock Analysis where I was the project lead that developed</span>
                        <span> the front-end using Kotlin, flask to create a REST API, and used Google Firebase</span>
                        <span> for search queries and authentication</span>
                    </p>
                    <p className="technologies">
                        <span>Here are a list of technologies and languages I have become familiar with.</span>
                    </p>
                </div>
                <div className="wrapper3">
                    <ul className="bottomTwo">
                        <li>
                            <ArrowRight className="icon" />
                            <a className="label" href="#/">Python</a>
                        </li>
                        <li>
                            <ArrowRight className="icon" />
                            <a className="label" href="#/">Kotlin</a>
                        </li>
                    </ul>
                    <ul className="bottomTwo">
                        <li>
                            <ArrowRight className="icon" />
                            <a className="label" href="#/">Java</a>
                        </li>
                        <li>
                            <ArrowRight className="icon" />
                            <a className="label" href="#/">Node.js</a>
                        </li>
                    </ul>
                    <ul className="bottomTwo">
                        <li>
                            <ArrowRight className="icon" />
                            <a className="label" href="#/">Flask</a>
                        </li>
                        <li>
                            <ArrowRight className="icon" />
                            <a className="label" href="#/">Android Stuido</a>
                        </li>

                    </ul>
                    <ul className="bottomTwo">
                        <li>
                            <ArrowRight className="icon" />
                            <a className="label" href="#/">Firebase</a>
                        </li>
                        <li>
                            <ArrowRight className="icon" />
                            <a className="label" href="#/">React</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div >
    );
}