import React from 'react'

/********** PROPS **********

full -> true || false             [100% width]

***************************/

export default props => (
    <div className={ `container${ props.full? '-fluid' : '' }` } >
        { props.children }
    </div>
)