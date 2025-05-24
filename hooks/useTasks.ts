import {create} from "zustand";


export type Tasks = string[];

export interface TaskStore {
    tasks:Tasks;
    addTask: (newTask:string) => void;
    resetTasks:() => void;
}



export const useTasks = create<TaskStore>(set => ({
    tasks: [],
    addTask: newTask => set(state => ({tasks: [...state.tasks, newTask]}) ),
    resetTasks: () => set({tasks: []})
}) )





