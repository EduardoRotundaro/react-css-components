import React from 'react'

import './component.css'

export default props => (
    <button className={ `close ${ props.open? 'on' : '' }` } onClick={ props.onClick } >
        <span></span>
        <span></span>
        <span></span>
    </button>
)