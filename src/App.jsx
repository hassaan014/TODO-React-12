import React, { useState } from 'react'
import './App.css'
import Input from './Components/Input/Input'
import { BsSendPlusFill } from "react-icons/bs";
import Button from './Components/Button/Button';
import { MdDelete } from 'react-icons/md';
import Listitem from './Components/Listitem/Listitem';
const App = () => {

  let [arr, setArr] = useState([]);

  // let active2;
  // setInterval(()=>{active2 = document.activeElement ? document.activeElement : ""},1)
 

  
  const addTask = () => {
    let task = document.getElementById('task');
    var normalTask = task.value.replace(/\s+/g, ' ');
    if (normalTask !== '' && normalTask !== ' ') {
      console.log(task.value);
      setArr([...arr, task.value])
    }
    task.value = '';
  }

  const enterValue = (key) => {
    if (key.key == "Enter") {
      addTask()  
      }
      }
    
  const deleteAll = () => {
    setArr([])
  }

  const deleteTask = (index) => {
    setArr(arr.filter((e, i) => i !== index))
  }

  const updateTask = (index) => {
    let updatedValue = prompt('Enter updated value', arr[index])
    setArr(arr.map((e, i) => { return (i !== index ? e : updatedValue) }))
  }

  return (
    <div id='main'>
      <div className='header'>
        <Input place='Enter task' type='text' func={enterValue} />
        <Button id='addBtn' func={addTask} sign={<BsSendPlusFill />} hoverText='Add Task' />
        <Button func={deleteAll} sign={<MdDelete />} hoverText='Delete All Tasks' />
      </div>
      <div id='list'>{arr.map((e, i) => {
        return <Listitem func1={() => { deleteTask(i) }} func2={() => { updateTask(i) }} task={e} index={i} key={i} />
      })}</div>
    </div>
  )
}

export default App