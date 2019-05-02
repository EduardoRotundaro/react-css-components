import React from 'react'

import Column from '../../../utils/Column'

import Logo from '../../../../assets/images/react_logo.png'

export default props => (
    <Column variable>
        <img src={Logo} alt="" className="main-header-logo box-shadow"/>
    </Column>
)