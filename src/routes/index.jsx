import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Main from '../components/pages/Main'
import Container from '../components/utils/Container'

import ButtonHoverEffects from '../components/pages/buttons/HoverEffects'

export default props => (
    <Router>
        <Container full>
            <Route exact path="/" component={Main} />
            <Route exact path="/buttons/hover-effects" component={ButtonHoverEffects} />
        </Container>
    </Router>
)