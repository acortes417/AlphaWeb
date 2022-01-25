
import "./Intro.scss"
import { useEffect, useRef } from "react"
export default function Intro() {
    const textRef = useRef();
    useEffect(() => {

    }, [])
    return (
        <div className="intro" id="intro">
            <div className="left">
                <h1 className="hello">Hi, my name is</h1>
                <h1 className="myName"> Andre Cortes.</h1>
                <h1 ref={textRef} className="top">I am a full-stack developer</h1>
                <h1 className="bottomText">
                    I am a new grad that enjoys learning new tech
                    and being able to apply it to real world solutions
                </h1>
            </div>
        </div >
    )
}