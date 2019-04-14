import React from 'react'

import './component.css'

export default props => (
    <button className="close" onClick={ props.onClick } >
        { props.text }
    </button>
)