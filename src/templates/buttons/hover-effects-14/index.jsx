import React from 'react'

import './component.css'

export default props => (
    <button className={ `btn bLayer ${props.color}` } onClick={ props.onClick } >
        <div className='layer'>{ props.layer }</div>
        { props.text }
    </button>
)