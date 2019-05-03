import React, { Fragment } from 'react'
import { camelCase } from 'lodash'

import Row from '../../utils/Row'
import Column from '../../utils/Column'
import Card from '../../../templates/cards/basic'
import Header from '../../partials/Header'
import CardBody from './CardBody'

import { TEMPLATES_CATEGORIES } from '../../../constants/content'

export default props => {
    function renderItens(){
        return TEMPLATES_CATEGORIES.map(
            item => 
                <Column key={ camelCase(item.label) } sizes="4-4-4-4-4">
                    <Card  icon={ item.icon }>
                        <CardBody title={ item.label } links={ item.content } />
                    </Card>
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
            <br/>
        </Fragment>
    )
}