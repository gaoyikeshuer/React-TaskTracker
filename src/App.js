import { useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import Tasks from './components/tasks/Tasks';


function App() {
  const[tasks,setTasks] = useState([{id:1 ,name:'wang', reminder:false},
    
  {id:2,name:'Yike', reminder: true}]);

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
      ))
    )

  }
  return (
    <div className="App">
     <Header title='Hello' />

     {tasks.length>0?<Tasks tasks={tasks} onDelete ={deleteTask} onToggle = {toggleReminder}/> :('No Tasks to Show' )}
    </div>

  );
}

export default App;
