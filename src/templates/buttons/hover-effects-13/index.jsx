import React from 'react'

import './component.css'

export default props => (
    <button className={ `btn expIcon ${props.color}` } onClick={ props.onClick } >
        <div className='icon'>{ props.icon }</div>
        <span>{ props.text }</span>
    </button>
)