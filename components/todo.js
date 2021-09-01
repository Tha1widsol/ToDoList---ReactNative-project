import React from 'react'
import {Button,StyleSheet, SafeAreaView } from 'react-native'


export default function Todo({todo,index,HandleRemoveTodo}) {
    function HandleRemoveTodoClick() {
        HandleRemoveTodo(todo.id)
    }
    return (
    <SafeAreaView style={styles.todolist}>
            <p style={{marginLeft:10}}>{index + 1}</p>
            <p style={{marginLeft:10}}>{todo.name}</p>

      <Button title="Delete " color="red" onPress = {() => HandleRemoveTodoClick()} />
      </SafeAreaView>
    
    )
}

const styles = StyleSheet.create({
    todolist: {
        padding:15,
        borderRadius:5,
        borderWidth:  1,
        marginBottom: 15,
        flexDirection: "row",
        justifyContent:"space-between"


    },
  
   
  
  });