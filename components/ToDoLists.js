import React from 'react'
import { Button,SafeAreaView, Text} from 'react-native'
import Todo from './todo'
import setTodos from '../App'
import uuidv4 from 'uuid/v4'

export default function ToDoLists({todos,HandleRemoveTodo}) {
    return (
        todos.map((todo,index) =>{
           return (
               <SafeAreaView>
           <Todo key = {todo.id} index = {index} todo = {todo} HandleRemoveTodo = {HandleRemoveTodo}/>
            </SafeAreaView>
           )

        })
       
    )
}
