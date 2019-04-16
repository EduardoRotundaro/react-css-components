import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './component.css'

export default props => {

    const renderList = ()=>{
        const list = props.list || []
        
        return list.map( item => (
            <li className={ item.color } >
                <a href={ item.ref } >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span>
                        <i>
                            <FontAwesomeIcon icon={ item.icon } ></FontAwesomeIcon>
                        </i>

                    </span>
                </a>
            </li>
        ))
    }

    return (
        <div className="layer">
            <ul className="layer-ul">
                { renderList() }          
            </ul>
        </div>
    )
}