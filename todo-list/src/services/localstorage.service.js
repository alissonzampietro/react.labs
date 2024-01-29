const SCHEMA = 'todo';

export const saveTask = (item) => {
    let allData = loadAllTasks();
    localStorage.setItem(SCHEMA, JSON.stringify([...allData, item]));
}

export const getTask = (item) => {
    let allData = JSON.parse(localStorage.getItem(SCHEMA));
    return allData.indexOf(item)
}

const resetTaskList = (newList) => {
    localStorage.setItem(SCHEMA, JSON.stringify(newList));
}


export const loadAllTasks = () => {
    const allData = localStorage.getItem(SCHEMA);
    return !allData ? [] : JSON.parse(allData);
}

export const removeTask = (taskId) => {
    let allTasks = loadAllTasks();
    const newTasks = allTasks.filter(task => task.id !== taskId);
    resetTaskList(newTasks);
}