import React from 'react'
import styles from './Button.module.css'

const Button = ({sign,hoverText,func,id}) => { 
    return (
        <>
            <button id={id} onClick={func} type='button' title={hoverText}>{sign}</button>
        </>
    )
}

export default Button