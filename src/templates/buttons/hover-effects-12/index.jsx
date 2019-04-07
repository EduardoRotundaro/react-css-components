import React from 'react'

import './component.css'

export default props => (
    <button className={ `btn expand ${props.color}` } onClick={ props.onClick } >{ props.text }</button>
)