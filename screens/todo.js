import React,{useState,useRef,useEffect}  from 'react'
import { Button, SafeAreaView, StyleSheet, TextInput,View,Text} from 'react-native'
import globalStyles from './styles/globalStyles'
import { FlatList,TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler'
import uuidv4 from 'uuid/v4'




export default function Todo({navigation}) {

    const [tasks,setTasks] = useState([])
    const [text,setText] = useState('')


    function HandleSetTasks(){
        const newTasks = [...tasks]
        const name = text

        if ((newTasks.filter(task => task.name === name && task.todolist ==  navigation.getParam('id')).length > 0)|| name == null || name.length == 0){
            return 
        }

        setTasks(prevState => {
            return [...prevState, {id:uuidv4(),todolist: navigation.getParam('id'), name: name, complete:false}]
        })
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
