import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './component.css'

export default props => (
    <div className={ `badge ${ prop.color? props.color : '' }` } >
        <div className="circle">
            <i><FontAwesomeIcon icon={props.icon}></FontAwesomeIcon></i>
        </div>
        <div className="ribbon">{ props.text }</div>
    </div>
)