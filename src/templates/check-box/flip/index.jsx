import React from 'react'

import './component.css'

export default props => (
    <div className="flip">
        <input type="checkbox"></input>
        <span>{ props.textOn }</span>
        <span>{ props.textOff }</span>
    </div>
)