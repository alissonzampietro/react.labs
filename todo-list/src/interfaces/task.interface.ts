import { TodoActions } from "../enums/todo.enum";
import { Subtask } from "./subtask.interface";

export interface Task {
    id: number,
    completed: boolean,
    text: string,
    subtasks: Subtask[]
}

export interface ListTasksProps {
    task: Task;
    onRemoveTask: (taskId: number) => void;
    onCompleteTask: (taskId: number) => void;
    onAddSubtasks: (taskId: number, subtaskDescription: string) => void;
}

export interface AddTaskProps {
    onAddTask: (value: string) => void;
    label?: string;
}

export interface TodoReduxStructure {
    type: TodoActions,
    payload: Task,
}