import React, { Fragment } from 'react'
import { camelCase } from 'lodash'

import Row from '../../utils/Row'
import Column from '../../utils/Column'
import Card from '../../../templates/cards/basic'
import Header from './Header'

const categories = [
    {
        label: 'Arrows',
        icon: 'far arrow-alt-circle-up',
        content: []
    },
    {
        label: 'Badges',
        icon: 'fas th-large',
        content: []
    },
    {
        label: 'Buttons',
        icon: 'far play-circle',
        content: []
    },
    {
        label: 'Cards',
        icon: 'far square',
        content: []
    },
    {
        label: 'Check-box',
        icon: 'far check-square',
        content: []
    },
    {
        label: 'Extras',
        icon: 'far plus-square',
        content: []
    },
    {
        label: 'Inputs',
        icon: 'far keyboard',
        content: []
    },
    {
        label: 'Links',
        icon: 'fas link',
        content: []
    },
    {
        label: 'Menus',
        icon: 'fas ellipsis-h',
        content: []
    },
    {
        label: 'Social Media',
        icon: 'fab github',
        content: []
    },
]

export default props => {
    function renderItens(){
        return categories.map(
            item => 
                <Column key={ camelCase(item.label) } sizes="4-4-4-4-4">
                    <Card  icon={ item.icon }>{ item.label }</Card>
                </Column>
        )
    }

    return (
        <Fragment>
            <Row hAlign="center">
                <Header/>
            </Row>
            <Row>
                { renderItens() }
            </Row>
        </Fragment>
    )
}