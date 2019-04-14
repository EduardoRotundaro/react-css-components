import React from 'react'

import './component.css'

export default props => (
    <div className="buttonChest">
        <div className={ `button ${ props.color? props.color : '' }` } >
            { props.text }
        </div>
        <span className="click">{ props.span }</span>
    </div>
)