import { useState, useEffect } from 'react';
import { TaskCard } from './TaskCard';
import { BoxCard } from './BoxCard';

export const TasksList = ({ newTask }) => {
    const [tasks, setTasks] = useState([
        { id: 1, title: 'Task 1', completed: false },
        { id: 2, title: 'Task 2', completed: true },
        { id: 3, title: 'Task 3', completed: false }
    ])
    const [showTasks, setShowTasks] = useState(true);
    const handleDelete = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    }
    const clickHandler = () => {
        setShowTasks(!showTasks);
    }
    useEffect(() => {
        if (newTask) {
            setTasks((prevTasks) => [...prevTasks, newTask]);
        }
    }, [newTask])
    return (
        <>
            <section className="tasklist">
                <h1>Tasks List</h1>
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
                </BoxCard>
            </section>
        </>
    )
}