import React, { useState } from 'react'
import './App.css'
import Input from './Components/Input/Input'
import { BsSendPlusFill } from "react-icons/bs";
import Button from './Components/Button/Button';
import { MdDelete } from 'react-icons/md';
import Listitem from './Components/Listitem/Listitem';
import { useEffect } from 'react';
import axios from 'axios';
const App = () => {

  let [arr, setArr] = useState([]);
  const [refresh, setRefresh] = useState(false)

  // let active2;
  // setInterval(()=>{active2 = document.activeElement ? document.activeElement : ""},1)

  const getData = async () => {
    await axios.get("http://localhost:2007/api/readtasks")
      .then((res) => {res.data ? setArr(res.data.getData) : null})
  }
  useEffect(() => {
    getData()
  }, [arr, refresh])

  const addTask = async () => {
    let task = document.getElementById('task');
    var normalTask = task.value.replace(/\s+/g, ' ');
    if (normalTask !== '' && normalTask !== ' ') {
      let obj = {
        todo: normalTask,
      }
      console.log(task.value,normalTask);
      await axios.post("http://localhost:2007/api/addtask", obj)
      setRefresh(!refresh)
    }
    task.value = '';
  }

  const enterValue = (key) => {
    if (key.key == "Enter") {
      addTask()
    }
  }

  const deleteAll = async () => {
    await axios.delete("http://localhost:2007/api/deletealltasks",{})
    setRefresh(!refresh)
    setArr([])
  }

  const deleteTask = async (index,taskid) => {
    await axios.delete("http://localhost:2007/api/deletetask", {data:{ id:taskid ,len:arr.length}}).then(()=>{
      setRefresh(!refresh)
      arr.splice(index,1);
    })
  }

  const updateTask = async (index, id) => {
    let updatedValue = prompt('Enter updated value', arr[index].todo)
    let obj = {
      id: id,
      todo: updatedValue,
    }
    await axios.put("http://localhost:2007/api/updatetask", obj)
    setRefresh(!refresh)
  }

  return (
    <div id='main'>
      <div className='header'>
        <Input place='Enter task' type='text' func={enterValue} />
        <Button id='addBtn' func={addTask} sign={<BsSendPlusFill />} hoverText='Add Task' />
        <Button func={deleteAll} sign={<MdDelete />} hoverText='Delete All Tasks' />
      </div>
      <div id='list'>{arr.length > 0 ? arr.map((e, i) => {
        return <Listitem func1={() => { deleteTask(i,e._id) }} func2={() => { updateTask(i, e._id) }} task={e.todo} index={i} key={i} />
      }) : null}</div>
    </div>
  )
}

export default App