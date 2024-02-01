import { Subtask } from "../interfaces/subtask.interface";
import { Task } from "../interfaces/task.interface";
import { commitChanges, loadAllData } from "./localstorage.service";

const SCHEMA = 'todo';

export const saveTask = (item: Task) => {
    let allData = loadAllData<Task[]>(SCHEMA);
    localStorage.setItem(SCHEMA, JSON.stringify([...allData, item]));
}

export const getTask = (item: Task) => {
    let allData = JSON.parse(localStorage.getItem(SCHEMA) || '');
    return allData.indexOf(item)
}

export const loadAllTasks = () => {
    return loadAllData<Task[]>(SCHEMA);
}

const toogleAllSubtasks = (subtasks: Subtask[]) => {
    return (subtasks && subtasks.length > 0) ? subtasks.map(sub => ({ ...sub, completed: !sub.completed })) : [];
}

export const completeTask = (taskId: number): Task[] => {
    const completedTask = loadAllData<Task[]>(SCHEMA).map((task: Task) => {
        if (task.id === taskId) {
            return {
                ...task,
                completed: !task.completed,
                subtasks: toogleAllSubtasks(task.subtasks)
            }

        }
        return task;
    });
    return commitChanges(SCHEMA, completedTask);
}
// TODO
export const completeSubtask = (taskId: number, subtaskId: number) => {
    const allTasks = loadAllTasks();

    const taskIndex = allTasks.findIndex((task: Task) =>
        task.id === taskId
    );

    allTasks[taskIndex]['subtasks'] = allTasks[taskIndex]['subtasks'].map((sub: Subtask) => sub.id === subtaskId ? { ...sub, completed: true } : sub);

    return commitChanges(SCHEMA, allTasks);
}

export const addSubtask = (taskId: number, subtask: Subtask) => {
    let allData = loadAllData<Task[]>(SCHEMA);
    const index = allData.findIndex((task: Task) => task.id === taskId);

    if (allData[index]) {
        allData[index]['subtasks'] = [subtask];
    } else {
        allData[index]['subtasks'].push(subtask);
    }

    return commitChanges(SCHEMA, allData);
}

export const removeSubtask = (taskId: number, subtaskId: number) => {
    let allData = loadAllData<Task[]>(SCHEMA);
    const indexTask = allData.findIndex((task: Task) => task.id === taskId);

    if (allData[indexTask] && allData[indexTask]['subtasks']) {
        const indexSubTask = allData[indexTask]['subtasks'].findIndex((sub: Subtask) => sub.id === subtaskId);
        if (indexSubTask !== -1) {
            allData[indexTask]['subtasks'].splice(indexSubTask, 1);
        }
    }

    return commitChanges(SCHEMA, allData);
}

export const removeTask = (taskId: number) => {
    let allTasks = loadAllData<Task[]>(SCHEMA);
    const newTasks = allTasks.filter((task: Task) => task.id !== taskId);
    commitChanges(SCHEMA, newTasks);
}