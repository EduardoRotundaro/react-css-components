import React from 'react'
import { Route } from 'react-router-dom'

import Close from './Close'
import Download from './Download'

export default props => (
    <div>
        <Route exact path="/buttons/close" component={ Close } />
        <Route exact path="/buttons/download" component={ Download } />
    </div>
)