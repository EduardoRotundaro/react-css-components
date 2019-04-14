import React from 'react'

import './component.css'

export default props => (
    <a className="link-box" href={ props.ref }>
        <span>{ props.text }</span>
        <em></em>
    </a>
)