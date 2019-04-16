import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './component.css'

export default props => {

    const renderList = ()=>{
        const list = props.list || []
        
        return list.map( item => (
            <li className="ca-li">
                <a href={ item.ref } >
                    <span className="ca-icon">
                        <i>
                            <FontAwesomeIcon icon={ item.icon } ></FontAwesomeIcon>
                        </i>
                    </span>
                    <div className="ca-content">
                        <h2 className="ca-main">{ item.mainText }</h2>
                        <h3 className="ca-sub">{ item.subText }</h3>
                    </div>
                </a>
            </li>
        ))
    }

    return (
        <ul className="ca-menu">
            { renderList() } 
        </ul>
    )
}