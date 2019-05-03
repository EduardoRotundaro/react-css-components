import React from 'react'

import './component.css'

export default props => (
    <a href={ props.href } className={ `link-hover-five link-hover-five-${ props.color }` }>
        <span className="text">{ props.children }</span>
    </a>
)