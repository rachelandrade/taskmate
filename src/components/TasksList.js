import { useState, useEffect } from 'react';
import { TaskCard } from './TaskCard';
import { BoxCard } from './BoxCard';

export const TasksList = ({ taskList, setTaskList, editHandler }) => {
    const [tasks, setTasks] = useState([
        // { id: 1, title: 'Task 1', completed: false },
        // { id: 2, title: 'Task 2', completed: true },
        // { id: 3, title: 'Task 3', completed: false }
    ])
    const [showTasks, setShowTasks] = useState(true);
   
    // useEffect(() => {
    //     if (newTask) {
    //         const index = tasks.findIndex((task) => task.id === newTask.id);
    //         if (index !== -1) {
    //             setTasks((prevTasks) => {
    //                 const updatedTasks = [...prevTasks];
    //                 updatedTasks[index] = newTask;
    //                 setTasks(updatedTasks);
    //             })
    //         } else {
    //             setTasks((prevTasks) => [...prevTasks, newTask]);
    //         }
    //     }
    // }, [newTask, tasks])
    const deleteHandler = (id) => {
        setTaskList(taskList.filter(task => task.id !== id))
        editHandler(null)
    }
    return (
        <>
            <section className="showTask">
                <div className='head'>
                    <div>
                        <span className='title'>
                            Todo
                        </span>
                        <span className='count'>{taskList.length}</span>
                    </div>
                    <button className='clearAll' onClick={() => setTaskList([])}>Clear All</button>
                </div>
                <ul>
                    {taskList && taskList.map((task) => (
                        <li key={task.id}>
                            <p>
                                <span className='name'>{task.title}</span>
                                <span className='time'>{task.createdDate}</span>
                            </p>
                            <i className='bi bi-pencil-square' onClick={() => editHandler(task)}></i>
                            <i className='bi bi-trash' onClick={() => deleteHandler(task.id)}></i>
                        </li>
                    ))}
                </ul>
                {/* <h1>Tasks List</h1>
                <ul>
                    <button className='trigger' onClick={clickHandler}>{showTasks ? 'Hide' : 'Show'} Tasks</button>
                    {showTasks && tasks.map((task, index) => (
                        <TaskCard task={task} handleDelete={handleDelete} key={task.id} />
                    )
                    )}
                </ul>
                <BoxCard result="success">
                    <p className="title">Completed Previous tasks</p>
                    <p className="description">completed Tasks</p>
                </BoxCard>
                <BoxCard result="warning">
                    <p className="title">In Progress Previous tasks</p>
                    <p className="description">In Progress Tasks</p>
                </BoxCard>
                <BoxCard result="alert">
                    <p className="title">Incomplete Previous tasks</p>
                    <p className="description">Incomplete Tasks</p>
                </BoxCard> */}
            </section>
        </>
    )
}