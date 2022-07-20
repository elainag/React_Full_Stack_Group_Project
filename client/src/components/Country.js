import React from "react";
import {Howl} from 'howler';
import "../styles/Country.css"

const Country = ({country, anthem, summary, setShowContainer}) => {

    const sound = new Howl({
        src: [anthem],
        html5: true
    })
    

return(
<div className="country-container">
    <button 
        onClick={() => {
        sound.pause()
        setShowContainer(false)
        }}>close</button>
    <h1>hi {country}</h1>
    <button onClick={()=> sound.play()}>{anthem ? 'Play' : 'not'}</button>
    <button onClick={()=> sound.pause()}>Pause anthem</button>
    <p>{summary.summary}</p>
</div>
)

}

export default Country