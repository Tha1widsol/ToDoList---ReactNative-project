import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,SafeAreaView,Image,TouchableOpacity,Button} from 'react-native';
import Header from './components/header'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



export default function App() {
  const handlePress = () => console.log("Text pressed");
  const Tab = createBottomTabNavigator();

  function HomeScreen() {
    return (
      <View style={styles.container}>
        <Text>Home!</Text>
      </View>
    );
  }
  function SettingsScreen() {
    return (
      <View style={styles.container}>
        <Text>csdcfs</Text>
      </View>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <Header title="ToDoList"></Header>
        <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen}/>
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>

    </SafeAreaView>

    
  );
  

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
   
   
  },

  intro: {
    backgroundColor:"lightblue",
    padding:"20px",
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nav:{
    display:"flex",
  }

});

