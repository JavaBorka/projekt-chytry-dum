import React from "react";
import lightOff from '../../html-vzor/images/light-off.svg'
import lightOn from '../../html-vzor/images/light-on.svg'
import { useState } from "react";
import './style.css'

const Light = ({name, state}) => {
    const [vypinac, setVypinac] = useState(state)

    const handleClick = () => {
        setVypinac(
            vypinac === 'on' ? 'off' : 'on'
        )
    }

    return (
        <div className="light" onClick={handleClick}>
            <div className="light__icon">
                <img src={vypinac === 'on' ? lightOn : lightOff} />
            </div>
            <div className="light__name">
                {name}
            </div>
        </div>
    )
}

export default Light