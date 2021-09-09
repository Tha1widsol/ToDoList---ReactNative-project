import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    input: {
        padding:10,
        height:40,
        marginBottom:20,
        marginTop:20,
        borderWidth:1,
        borderRightWidth:0,
        borderLeftWidth:0,
        borderTopWidth:0,
   
  },

  item: {
    backgroundColor:"white",
    borderRadius:5,
    marginBottom: 15,
    flexDirection: "row",
    justifyContent:"space-between",
    alignItems:"center",
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  

},

delete:{
  color:"red",
  height:50,
  bottom:-15,
  right:5
},

content:{
  flex:1,
  padding:20
}
  
  });