import React from 'react'

import './component.css'

export default props => (
    <a href={ props.ref } className="colorful-shadow">
        { props.text }
    </a>    
)