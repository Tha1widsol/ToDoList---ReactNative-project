import React,{useState} from 'react';
import { Button, SafeAreaView, StyleSheet, TextInput } from 'react-native'
import Header from './components/Header';
import Home from './screens/Home';
import Navigator from './routes/homeStack';

export default function App() {
  return (
    <>
    <Header title="ToDoApp"/>
    <Navigator/>
   </>
  )
}
