import React from 'react'


const Tasks = ({tasks}) => {

    
  return (
    <>{tasks.map((task)=>{
     return<h3 key={task.id}>{task.name}</h3>
    })}</>
  )
}

export default Tasks