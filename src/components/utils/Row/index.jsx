import React from 'react'

/********** PROPS **********

vAlign -> 'start' || 'center' || 'end'                                    [Vertical align cols]
hAlign -> 'start' || 'center' || 'end' || 'around' || 'between'           [Horizontal align cols]

***************************/

export default props => {

    function classNames(){
        let classes = `row`
        if(props.vAlign) classes += ` align-items-${props.vAlign}`
        if(props.hAlign) classes += ` justify-content-${props.hAlign}`

        return classes
    }

    return (
        <div className={ classNames() } >
            { props.children }
        </div>
    )
}