import React from 'react'

import Close1 from '../../../templates/buttons/close-1'
import Close2 from '../../../templates/buttons/close-2'
import Close3 from '../../../templates/buttons/close-3'
import Close4 from '../../../templates/buttons/close-4'

export default props => (
    <div className="wrapper">
        <h1 className="w-title">Close #1</h1>
        <div className="w-content mb-10">
            <Close1/>
        </div>
        <h1 className="w-title">Close #2</h1>
        <div className="w-content mb-40">
            <Close2/>
        </div>
        <h1 className="w-title">Close #3</h1>
        <div className="w-content mb-10">
            <Close3>Close</Close3>
        </div>
        <h1 className="w-title">Close #4</h1>
        <div className="w-content">
            <Close4>Close</Close4>
        </div>
    </div>
)