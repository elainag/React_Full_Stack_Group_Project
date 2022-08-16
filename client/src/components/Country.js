import React from "react";
import {Howl} from 'howler';
import "../styles/Country.css"

const Country = ({country, anthem, summary, setShowContainer}) => {

    const sound = new Howl({
        src: [anthem],
        html5: true
    })
    
    const playing = false;

return(
<div className="country-container">
    <button className="close-button" 
        onClick={() => {
        sound.pause()
        setShowContainer(false)
        }}>x</button>
    <h1>{country}</h1>
    <div>
    {anthem ? <button className="anthem-button" onClick={()=> sound.play()}>PLAY ANTHEM</button> : null}
    {anthem ? <button className="pause-button"onClick={()=> sound.pause()}>PAUSE ANTHEM</button>: null}
    </div>
    <p>{summary.summary}</p>
</div>
)

}

export default Country