import React from 'react'

import './component.css'

export default props => (
    <div className="ring-loader">
        <div className="ring">
            { props.text }
            <span></span>
        </div>
    </div>
)