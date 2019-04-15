import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './component.css'

export default props => (
    <a className="face-button" href={ props.ref } >
        <div className="face-primary">
            <i class="icon">
                <FontAwesomeIcon icon={ props.textIcon } ></FontAwesomeIcon>
            </i>
            { props.text }
        </div>
        <div class="face-secondary">
            <i class="icon">
                <FontAwesomeIcon icon={ props.sizeIcon } ></FontAwesomeIcon>
            </i>
            { props.size }
        </div>
    </a>
)
