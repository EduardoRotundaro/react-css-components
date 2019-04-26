import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default props => (
    <FontAwesomeIcon icon={ props.icon.split(' ') } size={ props.size }  rotation={ props.rotate } flip={ props.flip } spin={ props.spin } />
)