import React from 'react'
import {FaTimes} from 'react-icons/fa'
import './Task.css'

const Task = ({task, onDelete, onToggle}) => {
  return (
    <div className='task' onDoubleClick={() => onToggle(task.id)}>
        <h3>{task.name} <FaTimes style={{cursor:'pointer'}} onClick = {() => onDelete(task.id)}/></h3>
        <p></p>
    </div>
  )
}

export default Task