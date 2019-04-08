import React from 'react'

import './component.css'

export default props => (
    <span className={ `arrow--l-r ${ props.left? 'left' : 'right' }` } >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </span>
)