import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,SafeAreaView,Image,TouchableOpacity,Button,FlatList} from 'react-native';
import Header from './components/header';
import ToDoitem from './components/todoitem';
import AddTodo from './components/addTodo';

export default function App() {
  const handlePress = () => console.log("Text pressed");
  const [todos,setTodos] = useState([
    {text:"Get up",key:'1' },
    {text:"Drink tea",key:'2' },
    {text:"Go to work",key:'3' },
    {text:"Get laid",key:'4' },
  ]);

  const pressHandler = (key) =>{
    setTodos((prevTodos) =>{
      return prevTodos.filter(todo => todo.key != key);
    });
  }

  const submitHandler = (text) => {
    setTodos((prevTodos)=>{
      return [
        {text:text,key : Math.random().toString()},
        ...prevTodos
      ]
    })
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header title="ToDoList"></Header>
      <View style={styles.content}>
        <AddTodo submitHandler = {submitHandler}/>
        <View style = {styles.list}>
          <FlatList
           data = {todos}
           renderItem = {({item}) => (
            <ToDoitem item = {item} pressHandler={pressHandler}/>
          )}

            />
        </View>
      </View>
    </SafeAreaView>

    
  );
  

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
   
   
  },

  content:{
    padding:40,
  },
  list:{
    marginTop:20,
  }

});

