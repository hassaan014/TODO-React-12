import React from 'react'
import styles from './Listitem.module.css'
import Button from '../Button/Button'
import { MdRemoveCircleOutline } from 'react-icons/md'
import { FaRegEdit } from 'react-icons/fa'

const Listitem = ({task,func1,func2,index}) => {
    // const deleteTask = (delTaskBtn) => {
    //     delTaskBtn
    // }
  return (
    <div className={styles.listitem}>
        <div className={styles.actions}>
            <Button func={func1} sign={<MdRemoveCircleOutline />} hoverText='Remove' />
            <Button func={func2} sign={<FaRegEdit />} hoverText='Edit' />
        </div>
        <div className={styles.text}>
            {index+1}. {task}
        </div>
    </div>
  )
}

export default Listitem