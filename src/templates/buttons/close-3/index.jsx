import React from 'react'

import './component.css'

export default props => (
    <button className="close" >
        { props.children }
    </button>
)