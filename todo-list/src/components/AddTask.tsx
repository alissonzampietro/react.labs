import { ChangeEvent, useState } from "react";
import { AddTaskProps } from "../interfaces/task.interface";

const AddTask = ({onAddTask, label = 'Add Task'}: AddTaskProps) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const submitTask = () => {
        onAddTask(inputValue);
        setInputValue('');
    }

    return <div>
        <input
            type="text"
            className="w-60 px-3 py-1 text-lg text-gray-700 bg-white border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition duration-300 ease-in-out"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Enter task..."
        />
        <button className="bg-green-500 ml-2 hover:bg-green-400 text-white py-2 px-2 hover:border-green-500 rounded" onClick={() => submitTask()}>{label}</button>
    </div>

}


export default AddTask;