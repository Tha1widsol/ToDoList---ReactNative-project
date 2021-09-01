import React,{useState,useRef} from 'react'
import { Button, SafeAreaView, StyleSheet, TextInput } from 'react-native'
import ToDoLists from './components/ToDoLists'
import uuidv4 from 'uuid/v4'
import Header from './components/Header'


export default function App() {

  const [todos,setTodos] = useState([])

  const todoRef = useRef()

  function HandleSetTodos(){
    const newTodos = [...todos]

    
    const name = todoRef.current.value
    
    if (newTodos.filter(todo => todo.name === name ).length > 0 || name  == null || name.length == 0){
      return 
    }

    setTodos(prevState => {
      return [...prevState, {id: uuidv4(),name: name , complete: false}]
    })

    todoRef.current.value = null
   
  }

  function HandleRemoveTodo(id){
    const newTodos = [...todos]
    let index = newTodos.findIndex(todo => todo.id === id)
    newTodos.splice(index,1)
    setTodos(newTodos)

  }



  return (
    <SafeAreaView>
      <Header title="ToDoApp"/>
      <TextInput
      ref = {todoRef}
      placeholder = "Insert"
      style = {styles.input}

       />
      <Button title="Add ToDoList" onPress={HandleSetTodos}/>

      <ToDoLists todos = {todos} HandleRemoveTodo = {HandleRemoveTodo}/>

      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  input: {
     padding:10,
     height:40,
     marginBottom:20,
     marginTop:20,
     borderWidth:1,

  },

 

});