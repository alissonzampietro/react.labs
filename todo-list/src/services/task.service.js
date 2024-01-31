import { commitChanges, loadAllData } from "./localstorage.service";

const SCHEMA = 'todo';

export const saveTask = (item) => {
    let allData = loadAllData(SCHEMA);
    localStorage.setItem(SCHEMA, JSON.stringify([...allData, item]));
}

export const getTask = (item) => {
    let allData = JSON.parse(localStorage.getItem(SCHEMA));
    return allData.indexOf(item)
}

export const loadAllTasks = () => {
    return loadAllData(SCHEMA);
}

export const completeTask = (taskId) => {
    return commitChanges(SCHEMA, loadAllData(SCHEMA).map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
}
// TODO
export const completeSubtask = (taskId, subtaskId) => {
    const allTasks = loadAllTasks();

    return allTasks;
    
    const subtaskIndex = allTasks.findIndex(task =>
        task.id === taskId
    );

    allTasks[subtaskIndex]['subtasks'].map()

    return commitChanges(SCHEMA);
}

export const addSubtask = (taskId, subtask) => {
    let allData = loadAllData(SCHEMA);
    const index = allData.findIndex(task => task.id === taskId);

    if(allData[index]) {
        allData[index]['subtasks'] = [subtask];
    }else {
        allData[index]['subtasks'].push(subtask);
    }

    return commitChanges(SCHEMA, allData);
}

export const removeSubtask = (taskId, subtaskId) => {
    let allData = loadAllData(SCHEMA);
    const indexTask = allData.findIndex(task => task.id === taskId);

    if(allData[indexTask] && allData[indexTask]['subtasks']) {
        const indexSubTask = allData[indexTask]['subtasks'].findIndex(sub => sub.id === subtaskId);
        if(indexSubTask) {
            allData[indexTask]['subtasks'].splice(indexSubTask, 1);
        }
    }

    return commitChanges(SCHEMA, allData);
}

export const removeTask = (taskId) => {
    let allTasks = loadAllData(SCHEMA);
    const newTasks = allTasks.filter(task => task.id !== taskId);
    commitChanges(SCHEMA, newTasks);
}