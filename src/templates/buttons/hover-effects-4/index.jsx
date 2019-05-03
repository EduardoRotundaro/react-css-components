import React from 'react'

import './component.css'

export default props => (
    <a href={ props.href } className={ `link-hover-four link-hover-four-${ props.color }` }>
        <span className="text">{ props.children }</span>
        <span className="left"></span>
        <span className="right"></span>
    </a>
)