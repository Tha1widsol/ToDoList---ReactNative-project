import React,{useState,useEffect} from 'react'
import { SafeAreaView, TextInput,View,Alert,Text } from 'react-native'
import uuidv4 from 'uuid/v4'
import { FlatList,TouchableOpacity} from 'react-native-gesture-handler'
import globalStyles from '../styles/globalStyles'
import AsyncStorage from '@react-native-async-storage/async-storage'

const STORAGE_KEY = 'save_todos'

export default function ToDoLists({navigation}) {

  const [todos,setTodos] = useState([])
  const [text,setText] = useState('')

  useEffect(() => {
    async function fetch(){
    try {
      const storedTodos = await AsyncStorage.getItem(STORAGE_KEY)
      const newTodos = JSON.parse(storedTodos)

      if (newTodos) {
        setTasks(newTodos)
      
      }
    } catch (e) {
      alert('Failed to fetch the data from storage')
    }
  }

    fetch()

    }, [])

    useEffect(() => {
      async function fetch(){

        try {
          await AsyncStorage.setItem(STORAGE_KEY,JSON.stringify(todos))
  
        } catch (e) {
          alert('Failed to save the data to the storage')
        }
      
      }

      fetch()
  
      }, [todos])

  function HandleSetTodos(){
    const newTodos = [...todos]
    const name = text
 

    if (newTodos.filter(todo => todo.name === name).length > 0 || name == null || name.length == 0){
      Alert.alert("Invalid Input","Todolists can't be repeated or input value cannot be null",[
        {text:"Understood"}
      ])

      return 
    }

    setTodos(prevState => {
      return [...prevState, {id: uuidv4(),name: name}]
    })

    alert("Todolist:" + " '"+text+"' " +  " added")
    setText(null)
   
  }

  function HandleRemoveTodo(id){
    const newTodos = [...todos]
    let index = newTodos.findIndex(todo => todo.id === id)
    newTodos.splice(index,1)
    setTodos(newTodos)

  }


  return (
    <SafeAreaView style={{flex:1}}>

      <View style = {globalStyles.inputContainer}>
          <TextInput
          value ={text}
          placeholder = "Insert todolist..."
          onChangeText = {(val) => setText(val)}
          style = {globalStyles.input}
          />

        <TouchableOpacity onPress = {HandleSetTodos} style = {globalStyles.add}>
            <Text style={{fontSize:25}}>+</Text>
        </TouchableOpacity>
          
      </View>

      <View style = {globalStyles.divider} />

      <View style= {globalStyles.content}>
        <FlatList 
        data = {todos}
        renderItem = {({item,index}) => (
          <TouchableOpacity onPress ={() => navigation.navigate('Todo',item)} >
            <SafeAreaView style={globalStyles.item}>
            
              <Text style={{marginLeft:10}}>{index + 1}</Text>
              <Text style={{marginLeft:10}}>{item.name}</Text>
            
              <TouchableOpacity onPress = {() => HandleRemoveTodo(item.id)}>
                <Text style = {globalStyles.delete}>DELETE</Text>
              </TouchableOpacity>
            
            </SafeAreaView>
        
          </TouchableOpacity>
      
        )}
        
        /> 

      
      </View>

      </SafeAreaView>
  )
}



