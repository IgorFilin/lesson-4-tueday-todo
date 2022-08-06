import {FilterValuesType, TodolistType} from "../App";


type ActionType = ActionTypeRemoveTodolist | ActionTypeAddTodolist |ActionTypeChangeTodolistTitle | ActionTypeChangeTodolistFilter
type ActionTypeRemoveTodolist = {
    type:'REMOVE-TODOLIST'
    id:string
}
type ActionTypeAddTodolist = {
    type:'ADD-TODOLIST'
    todolist:TodolistType
}
type ActionTypeChangeTodolistTitle = {
    type:'CHANGE-TODOLIST-TITLE'
    id:string
    title:string
}
type ActionTypeChangeTodolistFilter = {
    type:'CHANGE-TODOLIST-FILTER'
    id:string
    filter:FilterValuesType
}


export const todolistsReducer = (state: Array<TodolistType>, action: ActionType) => {
    switch (action.type) {
        case 'REMOVE-TODOLIST':
            return state.filter(tl=> tl.id !== action.id)
        case 'ADD-TODOLIST':
            return [...state,action.todolist]
        case 'CHANGE-TODOLIST-TITLE':
            return state.map(tl => tl.id === action.id ? {...tl,title:action.title}:tl)
        case 'CHANGE-TODOLIST-FILTER' :
            return state.map(tl => tl.id === action.id ? {...tl,filter:action.filter}:tl)
            throw new Error("I don't understand this type")
    }
}
export const RemoveTodolistAC = (todolistId: string): ActionTypeRemoveTodolist => {
    return { type: 'REMOVE-TODOLIST', id: todolistId}
}
export const AddTodolistAC = (todolist:TodolistType):ActionTypeAddTodolist => {
    return {type:'ADD-TODOLIST',todolist}
}
export const ChangeTodolistTitle = (newTitle:string,id:string):ActionTypeChangeTodolistTitle => {
    return {type:'CHANGE-TODOLIST-TITLE',id:id,title:newTitle}
}
export const ChangeTodolistFilter = (id:string,filter:FilterValuesType):ActionTypeChangeTodolistFilter => {
    return {type:'CHANGE-TODOLIST-FILTER',id,filter}
}