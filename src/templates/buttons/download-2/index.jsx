import React from 'react'

import './component.css'

export default props => (
    <button className="download" onClick={ props.onClick } >
        <strong>{ props.text }</strong>
        <span>
            <span></span>
        </span>
    </button>
)
