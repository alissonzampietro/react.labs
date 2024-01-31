import { removeSubtask } from "../services/task.service";

const Subtasks = ({taskId, subtask}) => {

    return <li key={subtask.id} style={{ textDecoration: subtask.completed ? 'line-through' : 'none' }}>
        <input
          type="checkbox"
          checked={subtask.completed}
          onChange={() => onCompleteTask(task.id)}
        />
        <span>{subtask.text}</span>
        <button className="px-2 bg-red-500 ml-1 hover:bg-red-400 text-white px-1 rounded" onClick={() => removeSubtask(taskId, sub.id)}>Delete</button>
      </li>
}


export default Subtasks;