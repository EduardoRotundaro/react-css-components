import React, { Fragment } from 'react'

import Row from '../../../utils/Row'
import Column from '../../../utils/Column'
import Header from '../../../partials/Header'

import Button1 from '../../../../templates/buttons/hover-effects-1'
import Button2 from '../../../../templates/buttons/hover-effects-2'
import Button3 from '../../../../templates/buttons/hover-effects-3'
import Button4 from '../../../../templates/buttons/hover-effects-4'
import Button5 from '../../../../templates/buttons/hover-effects-5'

export default props => (
    <Fragment>
        <Row hAlign="center">
            <Header/>
        </Row>
        <br/><br/>
        <Row hAlign="center">
            <Column variable>
                <Button1 color="primary">Button</Button1>
            </Column>
        </Row>
        <br/>
        <Row hAlign="center">
            <Column variable>
                <Button2 color="primary">Button</Button2>
            </Column>
        </Row>
        <br/>
        <Row hAlign="center">
            <Column variable>
                <Button3 color="primary">Button</Button3>
            </Column>
        </Row>
        <br/>
        <Row hAlign="center">
            <Column variable>
                <Button4 color="primary">Button</Button4>
            </Column>
        </Row>
        <br/>
        <Row hAlign="center">
            <Column variable>
                <Button5 color="primary">Button</Button5>
            </Column>
        </Row>
    </Fragment>
)