import React,{useState,useRef,useEffect}  from 'react'
import { Button, SafeAreaView, StyleSheet, TextInput } from 'react-native'
import globalStyles from './styles/globalStyles'
import { FlatList,TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler'
import uuidv4 from 'uuid/v4'

const LOCAL_STORAGE_KEY = 'todoApp.tasks'

export default function Todo({navigation}) {

    const [tasks,setTasks] = useState([])

    const taskRef = useRef()

    useEffect(() =>{
        const storedTasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
        if (storedTasks) setTasks(storedTasks)
        
      },[])
    
       useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(tasks))
       },[tasks])

       
    function HandleSetTasks(){
        const newTasks = [...tasks]
        const name = taskRef.current.value

        if (newTasks.filter(task => task.name === name).length > 0 || name == null || name.length == 0){
            return 
        }

        setTasks(prevState => {
            return [...prevState, {id:uuidv4(),todolist: navigation.getParam('id'), name: name, complete:false}]
        })

        taskRef.current.value = null
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
        <SafeAreaView style = {{textAlign:'center',height:750,overflow:"auto"}}>
            <h2>{navigation.getParam('name')}</h2>

            <TextInput
            placeholder = "Insert task"
            ref = {taskRef}
            style = {globalStyles.input}
            />
        
        <Button title = "Add Task" onPress = {HandleSetTasks}/>

        <FlatList
        data = {getTasks()}
        renderItem = {({item,index}) => (
            <TouchableOpacity>
            <SafeAreaView style = {globalStyles.item}>
            <p style={{marginLeft:10}}>{index + 1}</p>
            <p style={{marginLeft:10}}>{item.name}</p>
      
            <Button title="Delete " color="red" onPress = {() => HandleRemoveTask(item.id)} />
            </SafeAreaView>
            </TouchableOpacity>
          )}

        />
        </SafeAreaView>
    )
}
