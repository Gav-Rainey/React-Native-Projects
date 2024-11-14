import { Text, View, StyleSheet } from "react-native";
import { SearchBar } from "react-native-screens";


export default function Customer() {
  return (
    <View style={Styles.Container}>
    
    </View>
  );
}

const Styles = StyleSheet.create({

  Container:{
    flex: 1,
    justifyContent:"center",
    alignItems: "center",
    backgroundColor:"white",
  },

  Links:{
    color:'white',
    padding:10,
    margin:10,
    backgroundColor:'red',
    borderRadius:30,
    elevation:5,
    fontWeight:"bold",
    width:200,
    textAlign:"center",
    fontSize:20,
  },

  Header:{
    fontSize:28,
    fontWeight:"bold",
    margin:10,
    padding:3,
    fontFamily:"sans-serif",
  },

  Logo:{
    margin:20,
    padding:2,
  },

});