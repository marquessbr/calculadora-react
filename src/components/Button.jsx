/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import './Button.css'

export default props => {
    let classNames = 'button '
    classNames += props.operation?'operation':''
    classNames += props.double?'double':''
    classNames += props.triple?'triple':''
    return (
        <button
        onClick={e => props.click && props.click(e.target.innerHTML)}
        className={classNames}>
        {props.label}
        </button>
    )
}