import React from 'react'

import './component.css'

export default props => (
    <a href={ props.href } className={ `link-hover-one link-hover-one-${ props.color }` }>
        <span className="circle"></span>
        <span className="text">{ props.children }</span>
    </a>
)