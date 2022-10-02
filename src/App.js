import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Tasks from "./components/tasks/Tasks";
import AddTask from "./components/AddTask/AddTask";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState('');//must have sth for useState
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };
    getTasks();
  }, []);
  //Fetch datas
  const fetchTasks = async () => {
    const res = await fetch(`http://localhost:5000/tasks`);
    const data = await res.json();
    console.log(data)
    return data;
  };
  //Fetch selected task
  const fetchTask = async (id) =>{
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()
    return data
  }

  //delete task

  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, { method: "DELETE" });
    setTasks(tasks.filter((task) => task.id !== id)); //new array
  };
  //Toggle Reminder

  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id)
    const updTask = {...taskToToggle, reminder:!taskToToggle.reminder}
    const res = await fetch(`http://localhost:5000/tasks/${id}`,{
      method: 'PUT',
      headers:{
        'Content-type':'application/json',
      },
      body: JSON.stringify(updTask),
    })
    const data = await res.json()
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      ) //spread operator  UI 
    );
  };
  //AddTask

  const addTask = async (task) => {
    const res = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: { //must be headers? why
        "Content-type": "application/json"
      },
      body: JSON.stringify(task),//??
    });
    const data = await res.json();
    setTasks([...tasks, data]);

    // const id = Math.floor(Math.random()*1000)+1
    // const newTask = {id, ...task}
    // setTasks([...tasks, newTask])
  };

  return (
    <div className="App">
      <Header
        title="Hello"
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length>0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : ("No Tasks to Show")}
    </div>
  );
}

export default App;
