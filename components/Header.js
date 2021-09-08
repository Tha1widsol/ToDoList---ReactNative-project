
import React from 'react';
import { StyleSheet, Text,SafeAreaView,Image,TouchableOpacity,Button} from 'react-native';

export default function Header({title}) {
    return (
     <SafeAreaView style={styles.header}>
       <Text style={styles.text}>{title}</Text>
      </SafeAreaView>
  
      
    );
  }

  const styles = StyleSheet.create({
      header:{
          height:60,
          padding:15,
          backgroundColor:"lightblue",
          alignSelf: 'stretch',
      },
      text:{
          fontSize:23,
          textAlign:'center',
      },
  })

