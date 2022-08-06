import {TasksStateType} from "../App";
import {v1} from "uuid";


type ActionsType = ActionTypeRemoveTask | ActionTypeAddTaskAC | ActionTypeChangeStatus | ActionTypeChangeTaskTitle

type ActionTypeRemoveTask = {
    type: 'REMOVE-TASK'
    idTask: string
    todolistId: string
}
type ActionTypeAddTaskAC = {
    type: 'ADD-TASK'
    title: string
    todolistId:string
}

type ActionTypeChangeStatus = {
    type: 'CHANGE-STATUS'
    id:string
    isDone:boolean
    todolistId:string
}
type ActionTypeChangeTaskTitle = {
    type:'CHANGE-TASK-TITLE'
    id: string
    newTitle: string
    todolistId: string
}

export const taskReducer = (state: TasksStateType, action: ActionsType) => {
    switch (action.type) {
        case 'REMOVE-TASK':
            return {...state, [action.todolistId]: state[action.todolistId].filter(t => t.id !== action.idTask)}
        case "ADD-TASK":
            return {...state,[action.todolistId]:[...state[action.todolistId],{id:v1(),title:action.title,isDone:false}]}
        case "CHANGE-STATUS":
            return {...state,[action.todolistId]:state[action.todolistId].map(task => task.id === action.id ? {...task,isDone:action.isDone}:task)}
        case "CHANGE-TASK-TITLE":
            return {...state,[action.todolistId]:state[action.todolistId].map(task => task.id === action.id? {...task,title:action.newTitle}:task)}
        default:
            throw new Error("I don't understand this type")
    }
}

export const removeTaskAC = (idTask: string, todolistId: string): ActionTypeRemoveTask => {
    return {type: "REMOVE-TASK", idTask, todolistId}
}
export const addTaskAC = (title: string, todolistId: string):ActionTypeAddTaskAC => {
    return {type:"ADD-TASK",title,todolistId}
}
export const changeStatusAC = (id:string,isDone:boolean,todolistId:string):ActionTypeChangeStatus=> {
    return{type:"CHANGE-STATUS",id,isDone,todolistId}
}
export const changeTaskTitle = (id: string, newTitle: string, todolistId: string):ActionTypeChangeTaskTitle => {
    return {type:"CHANGE-TASK-TITLE",id,newTitle,todolistId}
}
