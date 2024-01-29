import { useState } from "react";

const AddTask = ({onAddTask}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const submitTask = () => {
        onAddTask(inputValue);
        setInputValue('');
    }

    return <>
        <h1>To-Do List</h1>
        <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Enter task..."
        />
        <button onClick={() => submitTask()}>Add Task</button>
    </>

}


export default AddTask;