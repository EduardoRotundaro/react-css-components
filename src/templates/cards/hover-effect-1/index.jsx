import React from 'react'

import './component.css'

export default props => (
    <div className="box">
        <h1>{ props.title }</h1>
        <p>{ props.text }</p>
        <br></br><button onClick={ props.onClick } >{ props.buttonText }</button>
    </div>
)