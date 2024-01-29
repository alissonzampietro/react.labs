
const ListTasks = ({tasks, onRemoveTask, onCompleteTask}) => {
    return <ul>
    {tasks.map(task => (
      <li key={task.id} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onCompleteTask(task.id)}
        />
        <span>{task.text}</span>
        {task.subtasks && Array.isArray(task.subtasks) && task.subtasks.length > 0 && <button onClick={() => {}}>Subtasks</button>}
        {(!task.subtasks || (Array.isArray(task.subtasks) && task.subtasks.length === 0)) && <button onClick={() => {}}>Add Sub</button>}
        <button onClick={() => onRemoveTask(task.id)}>Delete</button>
      </li>
    ))}
  </ul>
}


export default ListTasks;