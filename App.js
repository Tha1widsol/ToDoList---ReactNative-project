import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,SafeAreaView,Image,TouchableOpacity,Button} from 'react-native';

export default function App() {
  const handlePress = () => console.log("Text pressed");
  return (
    <SafeAreaView style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text numberOfLines={1}>This is my first react project. I hope you guys enjoy this app</Text>
      <SafeAreaView style={{top:20,}}>
      <Button color ="red" title="new button"  onPress = {() => alert("Tapped")}></Button>
      </SafeAreaView>
      <StatusBar style="auto" />
  
      <TouchableOpacity onPress = {()=>console.log("Tapped") }>
      <Image
      source={{
        width:200,
        height:300,
        uri:"https://picsum.photos/200/300"}}
        style={{top: 30,}}></Image>
      </TouchableOpacity>
     
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom:"20",
  },
});
