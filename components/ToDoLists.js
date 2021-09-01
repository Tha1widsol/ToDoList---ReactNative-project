import React from 'react'
import Todo from './todo'

export default function ToDoLists({todos,HandleRemoveTodo}) {
    return (
        todos.map((todo,index) =>{
           return (
           <Todo key = {todo.id} index = {index} todo = {todo} HandleRemoveTodo = {HandleRemoveTodo}/>

           )

        })
       
    )
}
