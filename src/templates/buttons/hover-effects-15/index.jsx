import React from 'react'

import './component.css'

export default props => (
    <div className='btn-cont'>
        <a className='btn' href={ props.href } >
            { props.text }
            <span className='line-1'></span>
            <span className='line-2'></span>
            <span className='line-3'></span>
            <span className='line-4'></span>
        </a>
    </div>
)