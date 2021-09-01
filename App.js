import React,{useState} from 'react'
import { Button, SafeAreaView, StyleSheet, TextInput } from 'react-native'
import ToDoLists from './components/ToDoLists'
import uuidv4 from 'uuid/v4'
import Header from './components/Header'


export default function App() {

  const [textVal,setText] = useState()
  const [todos,setTodos] = useState([])

  function HandleSetTodos(){
    if (todos.filter(todo => todo.name === textVal).length > 0 || textVal == null || textVal.length == 0){
      return 
    }

    setTodos(prevState => {
      return [...prevState, {id: uuidv4(),name: textVal, complete: false}]
    })
  }

  function HandleRemoveTodo(id){
    console.log(id)
    const new_todos = [...todos]
    let index = new_todos.findIndex(todo => todo.id === id)
    new_todos.splice(index,1)
    setTodos(new_todos)

  }



  return (
    <SafeAreaView>
      <Header title="ToDoApp"/>
      <TextInput onChangeText={text => setText(text)}
      value = {textVal}
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