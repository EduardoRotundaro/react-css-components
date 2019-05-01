import React from 'react'

import './component.css'

export default props => (
    <div className="close-container">
        <div className="leftright"></div>
        <div className="rightleft"></div>
        <label className="close4">{ props.children }</label>
    </div>
)