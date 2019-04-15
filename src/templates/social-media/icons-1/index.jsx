import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './component.css'

export default props => {

    const renderList = ()=>{
        const list = props.list || []
        
        return list.map( item => (
            <li>
                <a href={ item.ref } >
                    <i>
                        <FontAwesomeIcon icon={ item.icon } ></FontAwesomeIcon>
                    </i>
                </a>
            </li>  
        ))
    }

    return (
        <div className="social-container">
            <ul className="social-icons">
                { renderList() }
            </ul>
        </div>
    )
}