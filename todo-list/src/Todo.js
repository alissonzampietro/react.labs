
import React, { useEffect, useState } from 'react';
import { saveTask, loadAllTasks, removeTask, completeTask as serviceCompleteTask } from './services/localstorage.service';
import AddTask from './components/AddTask';
import ListTasks from './components/ListTasks';

function TodoApp() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(loadAllTasks());
  }, [])

  const completeTask = (taskId) => {
    setTasks(serviceCompleteTask(taskId));
  }

  const handleAddTask = (value) => {
    if (value.trim() !== '') {
      const id = Date.now();
      saveTask({ id: id, text: value, completed: false });
      setTasks([...tasks, { id: id, text: value, completed: false }]);
    }
  };

  const handleDeleteTask = (taskId) => {
    removeTask(taskId);
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <div>
      <AddTask onAddTask={handleAddTask}/>
      <ListTasks tasks={tasks} onCompleteTask={completeTask} onRemoveTask={handleDeleteTask}/>
    </div>
  );
}

export default TodoApp;
