import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './component.css'

export default props => {

    const renderList = ()=>{
        const list = props.list || []
        
        return list.map( item => (
            <a href={ item.ref } title={ props.title } >
                <i>
                    <FontAwesomeIcon icon={ item.icon } ></FontAwesomeIcon>
                </i>
            </a>
        ))
    }

    return (
        <div className="effect varrius">
            <div className="buttons">
                { renderList() }
            </div>
        </div>
    )
}