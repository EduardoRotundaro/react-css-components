import React from 'react'

import './component.css'

export default props => (
    <span className={ `arrow ${ props.active? 'active' : '' }` } >
        <span></span>
        <span></span>
    </span>
)