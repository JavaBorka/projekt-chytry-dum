import React from "react";
import blindsClosed from '../../html-vzor/images/blinds-closed.svg'
import blindsOpen from '../../html-vzor/images/blinds-open.svg'
import { useState } from "react"
import './style.css'

const Blinds = ({state}) => {
    const [tlacitko, setTlacitko] = useState(state)

    return (
        <div className="blinds">
            <div className="blinds__icon">
                <img src={tlacitko === 'open' ? blindsOpen : blindsClosed} />
            </div>
            <div className="blinds__name">
                Žaluzie
            </div>
            <div className="blinds__controls">
                <button
                    onClick={() => {
                        setTlacitko('open')
                    }} 
                    className={tlacitko === 'open' ? "button button--active" : "button"} 
                >
                    Otevřeno
                </button>
                <button 
                    onClick={() => {
                        setTlacitko('closed')
                    }} 
                    className={tlacitko === 'closed' ? "button button--active" : "button"} 
                >
                    Zavřeno
                </button>
            </div>
        </div>
    )
}

export default Blinds