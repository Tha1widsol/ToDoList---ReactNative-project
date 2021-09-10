import {StyleSheet} from 'react-native'

export default StyleSheet.create({
  

  item: {
    backgroundColor:"white",
    borderRadius:5,
    marginBottom: 20,
    flexDirection: "row",
    justifyContent:"space-between",
    alignItems:"center",
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    height:50
  

},

input: {
  padding:10,
  borderRadius:30,
  backgroundColor:"white",
  width:250,
 

},

add: {
backgroundColor:"white",
width:50,
height:50,
borderRadius:30,
justifyContent:"center",
alignItems:"center"
},

inputContainer: {
  flexDirection: "row",
  justifyContent:"space-evenly",
  marginTop:20,
  marginBottom:20
},

delete:{
  color:"red",
  marginRight:5
},

done:{
  color:"green",
  marginRight:5
},



content:{
  flex:1,
  padding:20
},

divider: {
  borderBottomColor: 'grey',
  borderBottomWidth: 0.5,
}

  });

