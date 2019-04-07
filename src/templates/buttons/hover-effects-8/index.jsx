import React from 'react'

import './component.css'

export default props => (
    <button className="btn third" onClick={ props.onClick } >{ props.text }</button>
)