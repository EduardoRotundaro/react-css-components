import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './component.css'

export default props => (
    <div className="search-box">
        <input className="search-text" type="text" placeholder={ props.placeholder } ></input>
        <a className="search-btn" href={ props.ref } >
            <i>
                <FontAwesomeIcon icon={ props.icon } ></FontAwesomeIcon>
            </i>
        </a>
    </div>
)