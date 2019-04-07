import React from 'react'

import './component.css'

export default props => (
    <button className="btn fifth" onClick={ props.onClick } >{ props.text }</button>
)