import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './component.css'

export default props => {

    const renderList = ()=>{
        const list = props.list || []
        
        return list.map( item => (
            <a href={ item.ref } >
                <i className={ item.color } >
                    <FontAwesomeIcon icon={ item.icon } ></FontAwesomeIcon>
                </i>
            </a>
        ))
    }

    return (
        <div className="wrap">
            <div className="social">
                { renderList() }
            </div>
        </div>
    )
}