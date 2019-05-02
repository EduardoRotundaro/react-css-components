import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

export default props => {

    function renderLinks(){
        return props.links.map(
            link =>
                <Fragment>
                    <small><Link to={link.href} className="link-card">{link.label}</Link></small>
                    <br/>
                </Fragment>
        )
    }
    
    return (
        <Fragment>
            <p><b>{ props.title }</b></p>
            { renderLinks() }
        </Fragment>
    )
}