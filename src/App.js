import { useState,useEffect } from 'react';
import './App.css';
import Header from './components/header/Header';
import Tasks from './components/tasks/Tasks';
import AddTask from './components/AddTask/AddTask';


function App() {
  const[showAddTask,setShowAddTask] = useState(false)
  const[tasks,setTasks] = useState();
 useEffect(()=>{
  const getTasks = async () =>{
    const tasksFromServer = await fetchTasks()
    setTasks(tasksFromServer)
  }
  getTasks()
 

 },[])
 //Fetch data
 const fetchTasks = async() =>{
  const res = await fetch('http://localhost:5000/tasks')
  const data = await res.json()
  return data
}

  //delete task

  const deleteTask =(id) =>{
    setTasks(tasks.filter((task)=>(task.id !== id)))//new array
  }
  //Toggle Reminder

  const toggleReminder = (id) =>{
    setTasks(
      tasks.map((task) =>(
        task.id === id ?
        {...task, reminder:!task.reminder}:task
      ))//spread operator
    )

  }
  //AddTask

  const addTask = (task) =>{
    const id = Math.floor(Math.random()*1000)+1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])

  }

  return (
    <div className="App">
     <Header title='Hello' onAdd = {()=>setShowAddTask(!showAddTask)} showAdd = {showAddTask}/>
     {showAddTask && <AddTask onAdd ={addTask}/>}
     {tasks.length>0?<Tasks tasks={tasks} onDelete ={deleteTask} onToggle = {toggleReminder}/> :('No Tasks to Show' )}
    </div>

  );
}

export default App;
