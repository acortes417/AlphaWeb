
import "./Intro.scss"
import { init } from 'ityped'
import { useEffect, useRef } from "react"
export default function Intro() {
    const textRef = useRef();
    useEffect(() => {

    }, [])
    return (
        <div className="intro" id="intro">
            <div className="left">
                <h1 className="hello">Hi, my name is</h1>

            </div>
            <div className="bottom">
                <h1 className="myName"> Andre Cortes.</h1>
                <h1 ref={textRef} className="top">I am a full-stack developer</h1>
                <h1 className="bottomText">
                    I am a new grad that enjoys learning new tech<br />
                    and being able to apply it to real world solutions <br />
                </h1>
            </div>
        </div >
    )
}

{/* <div className="avatar">
<img className="avatar-image" src="https://lh3.googleusercontent.com/9_GQjL9F1iznnhJbdwCJWlGA5QycH3_Ljq2TcnqiL16_S6WyY9zkeg9q9jM31URZrkxieJLT2NtoSwVx1qYWZMWWq2emGq_1qdwJHJYiiNYc5phboaEdR1FXUAsmafhSiEFFeRlsXwojLv6Pj21NWjqMgKpWZIn_395-hCjbxBNhBABvLHdb7W64IyVHcBKENcr3V-yoLikN0LnBGM9pvWq1FfD8absloZsUOG2ji0ZqfLcOPLIYK8xNeeDFb9MFYR8gpursIANcssgtschTq1amsV91HjAd-TN4WABWaZXJy_jgBh-gQfaCu97HfoOToD61mJ933e3HhcSQkxr5AcsTg8d94uWuRLhEyCS_hKX27-5lTibwU2G-hAMm6UDbwv-plJR1Kf-p6EO-lvWGk67Syyu0EjcJUH6cYLa21hdlzfbP_O4z5VsZclJIxEFUm0W8l690N5aVrxQ6FOZ6LCAvWfW2kjGnQps952iztNIlTE01gDjt8rJNRr_Mwih8lhcp-u_p7ZH8XDp1l26P6y0oHa8AZ5cGYSTh3oRxGxgNsIvv7ncXoJl4hQHBYChA-ocW3SZB2gUvaHFXWQzdaf31ADS0-EKIl6aMriMWI8F8TUBUfE-_yhDJZpQ0xXTSt-z9mE6u9Eedbh0lSd12MXk2nmxLLnNu63q-su2ADVqEJ5OaTs39A9X4LAsde_IYgVkeLYBpvRIHXR6r7U38Zeez=s800-no?authuser=0" />

</div>
<div className="description">
<h1 className="name-header">
    Andre Cortes
</h1>
<p className="description-text">
    here is my small title description
</p>
</div> */}