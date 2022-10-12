import { ADD_ITEM, ADD_TODO, REMOVE_ITEM, TOGGLE_TODO } from '../types/todo'

let nextTodoId =0;

export const addTodo =(content)=>({
    type:ADD_TODO,
    plyload:{
        id:++nextTodoId,
        content,
    },
})

export const toggleTodo=(id)=>({
    type:TOGGLE_TODO,
    peyload:{id},
    
})