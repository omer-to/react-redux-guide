import React from 'react'
import PropTypes from 'prop-types'

const Link = ({ active, children, callbackOnClick}) => {
    

    return (
        <button
            onClick={callbackOnClick}
            disabled={active}
            style={{
            marginLeft: '4px',
            }}
        >
       {children}
        </button>
 
    )
}

Link.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    callbackOnClick: PropTypes.func.isRequired
}

export default Link
