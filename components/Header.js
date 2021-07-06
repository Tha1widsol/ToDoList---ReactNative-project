
import React from 'react';
import { StyleSheet, Text, View,SafeAreaView,Image,TouchableOpacity,Button} from 'react-native';

export default function Header({title}) {
    return (
     <View style={styles.header}>
       <Text style={styles.text}>{title}</Text>
      </View>
  
      
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

