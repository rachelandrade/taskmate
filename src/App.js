import './App.css';
import { Footer } from './Footer';
import { Header } from './Header';
import { TasksList } from './TasksList';
import { AddTask } from './AddTask';
import { useState } from 'react';
export const App = () => {
  const [newTask, setNewTask] = useState("");
  const handleClick = (value) => {
    console.log(value)
    setNewTask(value)
  }
  return (
    <div className="App">

      <Header />
      <main>
        <AddTask handleClick={handleClick} />
        <TasksList newTask={newTask} />
      </main>
      <Footer />
    </div>
  );
}
