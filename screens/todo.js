import React,{useState,useRef,useEffect}  from 'react'
import { Button, SafeAreaView, StyleSheet, TextInput,View,Text} from 'react-native'
import globalStyles from './styles/globalStyles'
import { FlatList,TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler'
import uuidv4 from 'uuid/v4'
import AsyncStorage from '@react-native-async-storage/async-storage'
const STORAGE_KEY = '@save_tasks'

export default function Todo({navigation}) {

    const [tasks,setTasks] = useState([])
    const [text,setText] = useState('')

    const saveTasks = async () => {
        try {
          await AsyncStorage.setItem(STORAGE_KEY,JSON.stringify(tasks))
          alert('Data successfully saved')
        } catch (e) {
          alert('Failed to save the data to the storage')
        }
      }
      
      const readTasks = async () => {
        try {
          const storedTasks = await AsyncStorage.getItem(STORAGE_KEY)
      
          if (storedTasks) {
            setTasks(storedTasks)
          }
        } catch (e) {
          alert('Failed to fetch the data from storage')
        }
      }
    
      useEffect(() => {
        readTasks()
      }, [tasks])
    
    function HandleSetTasks(){
        const newTasks = [...tasks]
        const name = text

    
        if ((newTasks.filter(task => task.name === name && task.todolist ==  navigation.getParam('id')).length > 0)|| name == null || name.length == 0){
            return 
        }

        setTasks(prevState => {
            return [...prevState, {id:uuidv4(),todolist: navigation.getParam('id'), name: name, complete:false}]
        })

      // saveTasks(tasks)
    }

    function HandleRemoveTask(id){
        const newTasks = [...tasks]
        let index = newTasks.findIndex(task => task.id === id)
        newTasks.splice(index,1)
        setTasks(newTasks)
      }

    function getTasks(){
        const newTasks = [...tasks]
        return newTasks.filter(task => task.todolist === navigation.getParam('id'))
    }
   
    return (
        <SafeAreaView style = {{textAlign:'center',flex:1}}>
            <Text style = {{fontSize:20,textAlign:'center',padding:20}}>{navigation.getParam('name')}</Text>

            <TextInput
            ClearButtonMode="always"
            placeholder = "Insert task"
            onChangeText = {(val) => setText(val)}
            style = {globalStyles.input}
            />
        
        <Button title = "Add Task" onPress = {HandleSetTasks}/>
        <View style= {globalStyles.content}>
        <FlatList
        data = {getTasks()}
        renderItem = {({item,index}) => (
            <TouchableOpacity>
            <SafeAreaView style = {globalStyles.item}>
            <Text style={{marginLeft:10}}>{index + 1}</Text>
            <Text style={{marginLeft:10}}>{item.name}</Text>
      
            <Button title="Delete " color="red" onPress = {() => HandleRemoveTask(item.id)} />
            </SafeAreaView>
            </TouchableOpacity>
          )}

        />
        </View>

        </SafeAreaView>
    )
}
