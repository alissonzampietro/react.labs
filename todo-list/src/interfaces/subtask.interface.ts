import { Task } from "./task.interface";

export interface Subtask extends Omit<Task, 'subtasks'> { }

export interface SubtaskProps {
    taskId: number,
    subtask: Subtask
}