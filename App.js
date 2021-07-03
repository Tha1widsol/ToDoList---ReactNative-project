import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image} from 'react-native';

export default function App() {
  const handlePress = () => console.log("Text pressed");
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text numberOfLines={1}>This is my first react project. I hope you guys enjoy this app</Text>
      <StatusBar style="auto" />
      <Image
      source={{
        width:200,
        height:300,
        uri:"https://picsum.photos/200/300"}}
        style={{top: 10,}}></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
