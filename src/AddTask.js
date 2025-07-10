import './AddTask.css'
import { useEffect, useRef, useState } from 'react';
export const AddTask = ({ handleClick }) => {
    const [value, setValue] = useState("")
    const [progress, setProgress] = useState(false);
    const ref = useRef("");
   
    const handleChange = (event) => {
        //setValue(event.target.value);
        ref.current.value = event.target.value;
    }
    const handleReset = () => {
        //setValue("");
        ref.current.value = "";
        setProgress(false)
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const newTask = {
            id: Math.floor(Math.random() * 1000),
            title: ref.current.value,
            completed: progress
        }
        handleClick(newTask);
    }
    return (
        <section className="addtask">
            <form onSubmit={handleSubmit}>
                <label htmlFor="task">Task Name</label>
                <input ref={ref} type="text" id="task" name='task' onChange={handleChange}  />
                <select onChange={(event) => setProgress(event.target.value)} value={progress}>
                    <option value="false">Pending</option>
                    <option value="true">Completed</option>
                </select>
                <button className='trigger'>Add Task</button>
                <span className='reset' onClick={handleReset}>Reset</span>
            </form>
        </section >
    )
}