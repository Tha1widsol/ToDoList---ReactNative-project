import React,{useState,useEffect} from 'react';
import {View, Text, StyleSheet,Button,FlatList } from 'react-native';
import {Card,FAB} from 'react-native-paper';

export default function Home(){
    const [data,setData] = useState([])
    
    useEffect(() => {
        fetch('http://192.168.1.174:30000/get',{
        
            mode: 'no-cors',
            headers:{
                "Access-Control-Allow-Origin" : "*", 
                "Access-Control-Allow-Credentials" : true,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
                },
            method:'GET',
          

        })
        .then(resp => resp.json())
        .then(todo => {
            setData(todo)
           console.log(todo)
        })
   
    },[])

    const renderData = (item) =>{
        return (
            <Card style = {styles.CardStyle}>
                <Text style = {{fontSize:20}}>{item.todo}</Text>
            </Card>
        )
    }

    return (
        <View style = {{flex:1}}>
            <FlatList
            data = {data}
            renderItem = {({item}) => {
                return renderData(item)
            }}
            keyExtractor = {item => '${item.id)'}
            />

            <FAB
            style = {styles.fab}
            small = {false}
            icon = "plus"
            theme = {{colors:{accent:"green"}}}
            onPress = {() => console.log("pressed")}
            />

          
        </View>
    )
}

const styles = StyleSheet.create({
    CardStyle:{
        padding:10,
        margin:10,
       

    },

    fab:{
        position:'absolute',
        margin:16,
        right:0,
        buttom:0
    }
    


})