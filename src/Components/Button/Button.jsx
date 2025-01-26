import React from 'react'
import styles from './Button.module.css'

const Button = ({sign,hoverText,func,id}) => { 
    return (
        <>
            <button id={id} onClick={func} type='button' title={hoverText} className={styles.buttons}>{sign}</button>
        </>
    )
}

export default Button