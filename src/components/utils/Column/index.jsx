import React from 'react'

/********** PROPS **********

vAlign -> 'start' || 'center' || 'end'       [Vertical align]
equal -> true || false                       [Equal width]
variable -> true || false                    [Variable width]
sizes -> '12-10-8-6-4'                        [Cols for devices - Extra Small, Small, Medium, Large and Extra Large]

***************************/

export default props => {

    function classNames (){
        let algn = `${ props.vAlign? `align-self-${props.vAlign} ` : '' }`

        if(props.equal) return `${algn}col`
        if(props.variable) return `${algn}col-auto`

        let cols = ( props.sizes || '12-12-12-12-12' ).split('-')
        return `${algn}col-${cols[0]} col-sm-${cols[1]} col-md-${cols[2]} col-lg-${cols[3]} col-xl-${cols[4]}`
    }

    return (
        <div className={ classNames() } >
            { props.children }
        </div>
    )

}