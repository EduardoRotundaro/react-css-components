import React from 'react'

import './component.css'

export default props => (
    <button className={ `btn shake ${props.color}` } onClick={ props.onClick } >{ props.text }</button>
)