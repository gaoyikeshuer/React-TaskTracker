import React from 'react'
import { useState } from 'react'

const Tasks = () => {
    
    const tasks = [{id:1 ,name:'wang'},
    
    {id:2,name:'Yike'}]
  return (
    <>{tasks.map((task)=>{
     return<h3 key={task.id}>{task.name}</h3>
    })}</>
  )
}

export default Tasks