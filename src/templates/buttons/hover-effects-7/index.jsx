import React from 'react'

import './component.css'

export default props => (
    <button className="btn first" onClick={ props.onClick } >{ props.text }</button>
)