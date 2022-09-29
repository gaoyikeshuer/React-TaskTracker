import './App.css';
import Header from './components/header/Header';
import Tasks from './components/tasks/Tasks';

function App() {
  return (
    <div className="App">
     <Header title='Hello' />
     <Tasks/>
    </div>

  );
}

export default App;
