import React from 'react'
import { Link } from 'react-router-dom'

export default props => (

    <div className="container">
        <ul>
            <li className="dropdown">
                <input type="checkbox" />
                <a href='/' data-toggle="dropdown"><strong>Arrows</strong></a>
                <ul className="dropdown-menu">
                    <li><Link to='/arrows'>Arrows</Link></li>
                </ul>
            </li>
            <li className="dropdown">
                <input type="checkbox" />
                <a href='/' data-toggle="dropdown"><strong>Badges</strong></a>
                <ul className="dropdown-menu">
                    <li><Link to='/badges'>Badges</Link></li>
                </ul>
            </li>
            <li className="dropdown">
                <input type="checkbox" />
                <a href='/' data-toggle="dropdown"><strong>Buttons</strong></a>
                <ul className="dropdown-menu">
                    <li><Link to='/buttons'>Buttons</Link></li>
                </ul>
            </li>
            <li className="dropdown">
                <input type="checkbox" />
                <a href='/' data-toggle="dropdown"><strong>Cards</strong></a>
                <ul className="dropdown-menu">
                    <li><Link to='/cards'>Cards</Link></li>
                </ul>
            </li>
            <li className="dropdown">
                <input type="checkbox" />
                <a href='/' data-toggle="dropdown"><strong>Check-box</strong></a>
                <ul className="dropdown-menu">
                    <li><Link to='/check-box'>Check-box</Link></li>
                </ul>
            </li>
            <li className="dropdown">
                <input type="checkbox" />
                <a href='/' data-toggle="dropdown"><strong>Extras</strong></a>
                <ul className="dropdown-menu">
                    <li><Link to='/extras'>Extras</Link></li>
                </ul>
            </li>
            <li className="dropdown">
                <input type="checkbox" />
                <a href='/' data-toggle="dropdown"><strong>Inputs</strong></a>
                <ul className="dropdown-menu">
                    <li><Link to='/inputs'>Inputs</Link></li>
                </ul>
            </li>
            <li className="dropdown">
                <input type="checkbox" />
                <a href='/' data-toggle="dropdown"><strong>Links</strong></a>
                <ul className="dropdown-menu">
                    <li><Link to='/links'>Links</Link></li>
                </ul>
            </li>
            <li className="dropdown">
                <input type="checkbox" />
                <a href='/' data-toggle="dropdown"><strong>Menus</strong></a>
                <ul className="dropdown-menu">
                    <li><Link to='/menus'>Menus</Link></li>
                </ul>
            </li>
            <li className="dropdown">
                <input type="checkbox" />
                <a href='/' data-toggle="dropdown"><strong>Social-Media</strong></a>
                <ul className="dropdown-menu">
                    <li><Link to='/social-media'>Social-Media</Link></li>
                </ul>
            </li>
        </ul>
    </div>
)