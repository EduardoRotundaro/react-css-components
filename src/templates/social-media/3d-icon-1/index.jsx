import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './component.css'

export default props => (
    <a className="icon-3d" href={ props.ref } >
        <i className="icon">
            <FontAwesomeIcon icon={ props.icon } ></FontAwesomeIcon>
        </i>
        <span> - { props.text }</span>
    </a>
)