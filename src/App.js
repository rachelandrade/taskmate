import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { TasksList } from './components/TasksList';
import { AddTask } from './components/AddTask';
import { useEffect, useState } from 'react';
export const App = () => {
  const [taskList, setTaskList] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editedTask, setEditedTask] = useState(null);
  const handleClick = (value) => {
    console.log(value)
    setNewTask(value)
    if (newTask) {
      const index = taskList.findIndex((task) => task.id === newTask.id);
      if (index !== -1) {
        taskList((prevTasks) => {
          const updatedTasks = [...prevTasks];
          updatedTasks[index] = value;
          setTaskList(updatedTasks);
        })
      } else {
        setTaskList((prevTasks) => [...prevTasks, value]);
      }
    }
    // setTaskList((prevTasks) => [...prevTasks, value]);
  }
  useEffect(() => {
    if (taskList.length > 0) {
      console.log(taskList);
      localStorage.setItem('taskList', JSON.stringify(taskList));
    }
  }, [taskList])
  useEffect(() => {
    const storedTasks = localStorage.getItem('taskList');
    if (storedTasks) {
      setTaskList(JSON.parse(storedTasks));
    }
  }, [])
  const editHandler = (task) => {
    console.log(task)
    setEditedTask(task);
  }

  return (
    <div className="App">

      <Header />
      <main>
        <AddTask taskList={taskList} setTaskList={setTaskList} editedTask={editedTask} />
        <TasksList taskList={taskList} setTaskList={setTaskList} editHandler={editHandler} />
      </main>
      {/* <Footer /> */}
    </div>
  );
}
