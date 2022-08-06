import {v1} from "uuid";
import {addTaskAC, changeStatusAC, changeTaskTitle, removeTaskAC, taskReducer} from "./task-reducer";
import {TasksStateType} from "../App";


test('correct task should be removed',()=>{
    let todolistId1 = v1()
    let todolistId2 = v1()
    let taskId = v1()


    const tasks = {
        [todolistId1]: [
        {id: taskId, title: "HTML&CSS", isDone: true},
        {id: v1(), title: "JS", isDone: true}
    ],
        [todolistId2]: [
        {id: v1(), title: "Milk", isDone: true},
        {id: v1(), title: "React Book", isDone: true}
    ]
    }

    const copyTasks = taskReducer(tasks,removeTaskAC(taskId,todolistId1))

    expect(copyTasks[todolistId1].length).toBe(1)
    expect(copyTasks[todolistId1][0].title).toBe("JS")
    expect(copyTasks).not.toBe(tasks)


})
test('correct task should be added',()=>{
    let todolistId1 = v1()
    let todolistId2 = v1()
    let taskId = v1()
    let newTitle = 'My lessons'

    const tasks = {
        [todolistId1]: [
        {id: v1, title: "HTML&CSS", isDone: true},
        {id: v1(), title: "JS", isDone: true}
    ],
        [todolistId2]: [
        {id: v1(), title: "Milk", isDone: true},
        {id: v1(), title: "React Book", isDone: true}
    ]
    }

    const copyTasks = taskReducer(tasks,addTaskAC(newTitle,todolistId1))

    expect(copyTasks[todolistId1].length).toBe(3)
    expect(copyTasks[todolistId1][2].title).toBe('My lessons')
    expect(copyTasks).not.toBe(tasks)


})
test('correct task changed status',()=>{
    let todolistId1 = v1()
    let todolistId2 = v1()
    let taskId = v1()
    let newStatus = false

    const tasks = {
        [todolistId1]: [
        {id: taskId, title: "HTML&CSS", isDone: true},
        {id: v1(), title: "JS", isDone: true}
    ],
        [todolistId2]: [
        {id: v1(), title: "Milk", isDone: true},
        {id: v1(), title: "React Book", isDone: true}
    ]
    }

    const copyTasks = taskReducer(tasks,changeStatusAC(taskId,newStatus,todolistId1))

    expect(copyTasks[todolistId1][0].isDone).toBe(false)
    expect(copyTasks[todolistId1].length).toBe(2)
    expect(copyTasks).not.toBe(tasks)


})
test('correct task changed title',()=>{
    let todolistId1 = v1()
    let todolistId2 = v1()
    let taskId = v1()
    let newTitle = 'buy milk'

    const tasks = {
        [todolistId1]: [
        {id: taskId, title: "HTML&CSS", isDone: true},
        {id: v1(), title: "JS", isDone: true}
    ],
        [todolistId2]: [
        {id: v1(), title: "Milk", isDone: true},
        {id: v1(), title: "React Book", isDone: true}
    ]
    }

    const copyTasks = taskReducer(tasks,changeTaskTitle(taskId,newTitle,todolistId1))

    expect(copyTasks[todolistId1][0].title).toBe('buy milk')
    expect(copyTasks[todolistId1].length).toBe(2)
    expect(copyTasks).not.toBe(tasks)


})

