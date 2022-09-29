import { useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import Tasks from './components/tasks/Tasks';


function App() {
  const[tasks,setTasks] = useState([{id:1 ,name:'wang'},
    
  {id:2,name:'Yike'}]);
  return (
    <div className="App">
     <Header title='Hello' />
     <Tasks tasks={tasks}/>
    </div>

  );
}

export default App;
