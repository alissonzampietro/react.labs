
import React, { useEffect, useState } from 'react';
import { saveTask, loadAllTasks, removeTask, completeTask as serviceCompleteTask, addSubtask } from '../services/task.service';
import AddTask from '../components/AddTask';
import ListTasks from '../components/ListTasks';

function TodoApp() {
  const [tasks, setTasks] = useState([]);

  const buildTaskBody = (value) => {
    const id = Date.now();
    return { id: id, text: value, completed: false, subtasks: [] }
  }

  useEffect(() => {
    setTasks(loadAllTasks());
  }, [])

  const completeTask = (taskId) => {
    setTasks(serviceCompleteTask(taskId));
  }

  const handleAddTask = (value) => {
    if (value.trim() !== '') {
      const taskBody = buildTaskBody(value);
      saveTask(taskBody);
      setTasks([...tasks, taskBody]);
    }
  };

  const addSubtasks = (taskId, value) => {
    addSubtask(taskId, buildTaskBody(value))
  }

  const handleDeleteTask = (taskId) => {
    removeTask(taskId);
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <div>
      <h1 className='text-4xl md:text-5xl lg:text-6xl font-semibold text-center text-gray-800 dark:text-gray-400 leading-tight my-5'>To-Do List</h1>
      <AddTask onAddTask={handleAddTask}/>
      <ul className='mt-10'>
        {tasks.map(task => <ListTasks 
          key={task.id}
          task={task} 
          onCompleteTask={completeTask} 
          onRemoveTask={handleDeleteTask}
          onAddSubtasks={addSubtasks}
        />)}
      </ul>
      
    </div>
  );
}

export default TodoApp;
