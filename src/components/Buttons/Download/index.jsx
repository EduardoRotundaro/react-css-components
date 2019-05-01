import React from 'react'

import Download1 from '../../../templates/buttons/download-1'
import Download2 from '../../../templates/buttons/download-2'
import Download3 from '../../../templates/buttons/download-3'
import Download4 from '../../../templates/buttons/download-4'

export default props => (
    <div className="wrapper">
        <h1 className="w-title">Download #1</h1>
        <div className="w-content mb-10">
            <Download1/>
        </div>
        <h1 className="w-title">Download #2</h1>
        <div className="w-content mb-10">
            <Download2></Download2>
        </div>
        <h1 className="w-title">Download #3</h1>
        <div className="w-content mb-10">
            <Download3></Download3>
        </div>
        <h1 className="w-title">Download #4</h1>
        <div className="w-content mb-10">
            <Download4></Download4>
        </div>
    </div>
)