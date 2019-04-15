import React from 'react'

import './component.css'

export default props => {

    const renderList = ()=>{
        const list = props.list || []
        
        return list.map( item => (
            <a className="file-download" href="#" >
                <span>{ item.text }</span>
                <span>{ item.format }</span>
            </a>
        ))
    }

    return (
        <div>
            { renderList() }
        </div>
    )
}
