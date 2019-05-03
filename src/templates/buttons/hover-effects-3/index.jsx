import React from 'react'

import './component.css'

export default props => (
    <a href={ props.href } className={ `link-hover-three link-hover-three-${ props.color }` }>
        <span className="text">{ props.children }</span>
    </a>
)