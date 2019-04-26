import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Main from '../components/Main'
import Arrows from '../components/Arrows'
import Badges from '../components/Badges'
import Buttons from '../components/Buttons'
import Cards from '../components/Cards'
import CheckBox from '../components/CheckBox'
import Extras from '../components/Extras'
import Inputs from '../components/Inputs'
import Links from '../components/Links'
import Menus from '../components/Menus'
import SocialMedia from '../components/SocialMedia'

export default props => (
    <Router>
        <Route exact path="/" component={Main} />
        <Route path='/arrows' component={Arrows} />
        <Route path='/badges' component={Badges} />
        <Route path='/buttons' component={Buttons} />
        <Route path='/cards' component={Cards} />
        <Route path='/check-box' component={CheckBox} />
        <Route path='/extras' component={Extras} />
        <Route path='/inputs' component={Inputs} />
        <Route path='/links' component={Links} />
        <Route path='/menus' component={Menus} />
        <Route path='/social-media' component={SocialMedia} />
    </Router>
)