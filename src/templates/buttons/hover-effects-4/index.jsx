import React from 'react'

import './component.css'

export default props => (
    <a className={ `link-hover link-hover-${ props.color }` }>
        <span className="text">{ props.text }</span>
        <span className="left"></span>
        <span className="right"></span>
    </a>
)