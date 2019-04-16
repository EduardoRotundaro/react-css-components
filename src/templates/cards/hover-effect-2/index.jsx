import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './component.css'

export default props => (
    <div className="card-container">
        <div className="box">
            <div className="icon">
                <i>
                    <FontAwesomeIcon icon={ props.icon } ></FontAwesomeIcon>
                </i>
            </div>
            <div className="content">
                <h3>{ props.title }</h3>
                <p>{ props.description }</p>
            </div>
        </div>
    </div>
)