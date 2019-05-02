import React from 'react'

import './component.css'

import Icon from '../../icons/FontAwesome'

export default props => (
    <div className="basic-card box-shadow">
        <div className="basic-card-icon">
            <Icon name={ props.icon } size='2x' />
        </div>
        <div className="basic-card-body">
            { props.children }
        </div>
    </div>
)