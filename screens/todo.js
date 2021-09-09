import React,{useState,useEffect}  from 'react'
import { SafeAreaView,TextInput,View,Text,Button,Alert} from 'react-native'
import globalStyles from './styles/globalStyles'
import { FlatList,TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler'
import uuidv4 from 'uuid/v4'
import AsyncStorage from '@react-native-async-storage/async-storage'

const STORAGE_KEY = 'save_tasks'

export default function Todo({navigation}) {
    const [tasks,setTasks] = useState([])
    const [text,setText] = useState('')

  useEffect(() => {
    async function fetch(){
    try {
      const storedTasks = await AsyncStorage.getItem(STORAGE_KEY)
      const newTasks = JSON.parse(storedTasks)

      if (newTasks) {
        setTasks(newTasks)
      
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
          await AsyncStorage.setItem(STORAGE_KEY,JSON.stringify(tasks))
  
        } catch (e) {
          alert('Failed to save the data to the storage')
        }
      
      }

      fetch()
  
      }, [tasks])
  
        
    
    function HandleSetTasks(){
        const newTasks = [...tasks]
        const name = text
    
        if ((newTasks.filter(task => task.name === name && task.todolist ==  navigation.getParam('id')).length > 0)|| name == null || name.length == 0){
          Alert.alert("Invalid","Tasks can't be repeated or input value cannot be null",[
            {text:"Understood"}
          ])

            return 
        }

        setTasks(prevState => {
            return [...prevState, {id:uuidv4(),todolist: navigation.getParam('id'), name: name, complete:false}]
        })

        setText(null)
        
      

    }

    function HandleRemoveTask(id){
        const newTasks = [...tasks]
        let index = newTasks.findIndex(task => task.id === id)
        newTasks.splice(index,1)
        setTasks(newTasks)
      }

    const getTasks = () => {
        return tasks.filter(task => task.todolist == navigation.getParam('id'))
    }
   
    return (
        <SafeAreaView style = {{textAlign:'center',flex:1}}>
            <Text style = {{fontSize:20,textAlign:'center',padding:20}}>{navigation.getParam('name')}</Text>

            <TextInput
            value = {text}
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
      
            <TouchableWithoutFeedback onPress = {() => HandleRemoveTask(item.id)}>
              <Text style = {globalStyles.delete}>DELETE</Text>
            </TouchableWithoutFeedback>

            </SafeAreaView>
            </TouchableOpacity>
          )}

        />
        </View>

        </SafeAreaView>
    )
}
