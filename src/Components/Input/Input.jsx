import React from 'react'
import styles from './input.module.css'

const Input = ({type,place,func}) => {
  return (
    <>
    <input onKeyPress={(e)=>{func(e)}} id='task' type={type} placeholder={place} className={styles.inp}/>
    </>
  )
}

export default Input