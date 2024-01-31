import { useState } from "react";
import AddTask from "./AddTask";



const ListTasks = ({task, onRemoveTask, onCompleteTask, onListSubtasks, onAddSubtasks}) => {
    const [showAddTask, setShowAddTask] = useState(false);

    const handleAddTaskAction = (id, value) => {
      setShowAddTask(curr => !curr);
      onAddSubtasks(id, value);
    }

    return <li key={task.id} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onCompleteTask(task.id)}
        />
        <span>{task.text}</span>
        {!showAddTask && <button className="px-2 ml-1 bg-blue-500 hover:bg-blue-400 text-white px-1 rounded" onClick={() => setShowAddTask(curr => !curr)}>Add Sub</button>}
        <button className="px-2 bg-red-500 ml-1 hover:bg-red-400 text-white px-1 rounded" onClick={() => onRemoveTask(task.id)}>Delete</button>
        <br />
        <div className="ml-10">
          {task.subtasks && (task.subtasks.map(sub => <ListTasks task={sub} onRemoveTask={onRemoveTask} onCompleteTask={onCompleteTask} subtasks={false}/>))}
          {showAddTask && <AddTask label="Add Subtask" onAddTask={(value) => handleAddTaskAction(task.id, value)}/>}
        </div>
      </li>
}


export default ListTasks;