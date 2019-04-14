import React from 'react'

import './component.css'

export default props => (
    <a href={ props.ref } className="submit" >
        { props.text }
    </a>
)