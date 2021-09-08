import React,{useState,useRef,useEffect} from 'react'
import { Button, SafeAreaView, StyleSheet, TextInput,View,Alert,Text } from 'react-native'
import uuidv4 from 'uuid/v4'
import { FlatList,TouchableOpacity, TouchableWithoutFeedback} from 'react-native-gesture-handler'
import globalStyles from './styles/globalStyles'


export default function ToDoLists({navigation}) {

  const [todos,setTodos] = useState([])
  const [text,setText] = useState('')

  function HandleSetTodos(){
    const newTodos = [...todos]
    const name = text
 

    if (newTodos.filter(todo => todo.name === name).length > 0 || name == null || name.length == 0){
      Alert.alert("Invalid input","Please try again","understood")
      return 
    }

    setTodos(prevState => {
      return [...prevState, {id: uuidv4(),name: name, complete: false,tasks_counter: 0}]
    })
   
   
  }

  function HandleRemoveTodo(id){
    const new_todos = [...todos]
    let index = new_todos.findIndex(todo => todo.id === id)
    new_todos.splice(index,1)
    setTodos(new_todos)

  }


  return (
    <SafeAreaView style={{flex:1}}>
        <TextInput
        ClearButtonMode="always"
        placeholder = "Insert todolist"
        onChangeText = {(val) => setText(val)}
        style = {globalStyles.input}
        />

      <Text style = {{marginLeft:10}}>Todolists: {todos.length}</Text>
        <Button title="Add ToDoList"  onPress={HandleSetTodos}/>

      <View style= {globalStyles.content}>
        <FlatList 
        data = {todos}
        renderItem = {({item,index}) => (
          <TouchableOpacity onPress ={() => navigation.navigate('Todo',item)}>
          <SafeAreaView style={globalStyles.item}>
          
          <Text style={{marginLeft:10}}>{index + 1}</Text>
          <Text style={{marginLeft:10}}>{item.name}</Text>
        
         
          <Button title="Delete " color="red" onPress = {() => HandleRemoveTodo(item.id)} />
          </SafeAreaView>
          </TouchableOpacity>
      
        )}
        /> 
      
      </View>

      </SafeAreaView>
  )
}



