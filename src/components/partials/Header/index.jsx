import React from 'react'
import { Link } from 'react-router-dom'

import Column from '../../utils/Column'
import Logo from '../../../assets/images/react_logo.png'

export default props => (
    <Column variable>
        <Link to='/'>
            <img src={Logo} alt="" className="main-header-logo box-shadow"/>
        </Link>
    </Column>
)