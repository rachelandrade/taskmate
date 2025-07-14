import './AddTask.css'
import { useEffect, useRef, useState } from 'react';
export const AddTask = ({ taskList, setTaskList, editedTask }) => {
    const [inputValue, setInputValue] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();

        const date = new Date();
        if (!editedTask) {
            const task = {
                id: date.getTime(),
                title: event.target.task.value,
                createdDate: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
            }
            setTaskList([...taskList, task])
        } else {
            const task = {
                id: editedTask.id,
                title: event.target.task.value,
                createdDate: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
            }
            setTaskList(taskList.map(t => t.id === editedTask.id ? task : t));
        }
        setInputValue('');
    }
    const handleChange = (event) => {
        setInputValue(event.target.value);
    }
    useEffect(() => {
        if (editedTask) {
            setInputValue(editedTask.title);
        } else {
            setInputValue('');
        }
    }, [editedTask]);
    
    return (
        <section className="addtask">
            <form onSubmit={handleSubmit}>
                <input type="text" id="task" name='task' autoComplete="off"
                    placeholder='Add Task' value={inputValue} onChange={handleChange} />
                {/* <select onChange={(event) => setProgress(event.target.value)} value={progress}>
                    <option value="false">Pending</option>
                    <option value="true">Completed</option>
                </select> */}
                {!editedTask ? <button className='trigger' type='submit'>Add</button> : <button className='trigger' type='submit'>Update</button>}
                {/* <span className='reset' onClick={handleReset}>Reset</span> */}
            </form>
        </section >
    )
}