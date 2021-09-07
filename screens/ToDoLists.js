import React,{useState,useRef,useEffect} from 'react'
import { Button, SafeAreaView, StyleSheet, TextInput } from 'react-native'
import uuidv4 from 'uuid/v4'
import { FlatList,TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler'
import globalStyles from './styles/globalStyles'

const LOCAL_STORAGE_KEY = 'todoApp.todos'

export default function ToDoLists({navigation}) {

  const [todos,setTodos] = useState([])

  const todoRef = useRef()

  useEffect(() =>{
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos(storedTodos)
    
  },[])

   useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(todos))
   },[todos])

  function HandleSetTodos(){
    const newTodos = [...todos]
    const name = todoRef.current.value


    if (newTodos.filter(todo => todo.name === name).length > 0 || name == null || name.length == 0){
      return 
    }

    setTodos(prevState => {
      return [...prevState, {id: uuidv4(),name: name, complete: false}]
    })

    todoRef.current.value = null

  }

  function HandleRemoveTodo(id){
    const new_todos = [...todos]
    let index = new_todos.findIndex(todo => todo.id === id)
    new_todos.splice(index,1)
    setTodos(new_todos)

  }

  return (
    <SafeAreaView style = {{height:750,overflow:"auto"}}>
        <TextInput
        placeholder = "Insert todolist"
        ref = {todoRef}
        style = {globalStyles.input}

        />
        <Button title="Add ToDoList" onPress={HandleSetTodos}/>

        <FlatList 
        data = {todos}
        renderItem = {({item,index}) => (
          <TouchableOpacity onPress ={() => navigation.navigate('Todo',item)}>
          <SafeAreaView style={globalStyles.item}>
          <p style={{marginLeft:10}}>{index + 1}</p>
          <p style={{marginLeft:10}}>{item.name}</p>
    
          <Button title="Delete " color="red" onPress = {() => HandleRemoveTodo(item.id)} />
          </SafeAreaView>
          </TouchableOpacity>
        )}
        
        />

      </SafeAreaView>
  )
}



