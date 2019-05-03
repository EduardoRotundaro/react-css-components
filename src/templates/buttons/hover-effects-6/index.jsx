import React from 'react'

import './component.css'

export default props => (
    <a href={ props.href } className="link-hover-six">
        <div className="qube">
            <div className="front">{ props.text1 }</div>
            <div className="back">{ props.text2 }</div>
        </div>
    </a>
)