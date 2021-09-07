import React,{useState} from 'react';
import { Button, SafeAreaView, StyleSheet, TextInput,Text } from 'react-native'
import Header from './components/Header';
import Navigator from './routes/homeStack';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
    <Header title="ToDoApp"/>
    <Navigator/>
   </NavigationContainer>
  )
}
