import { Text, View, StyleSheet, Image } from "react-native";
import { Link } from 'expo-router'

export default function Index() {
  return (
    <View style={Styles.Container}>

      <Image style={Styles.Logo} source={require("../assets/images/favicon.png")}></Image>
      
      <Text style={Styles.Header}>Choose An Option</Text>
      <Link style={Styles.Links} href='/customer'>Customer Login</Link>
      <Link style={Styles.Links} href='/merchant'>Merchant Login</Link>
      <Link style={Styles.Links} href='/corporate'>Corporate Login</Link>
    
    </View>
  );
}

const Styles = StyleSheet.create({

  Container:{
    flex: 1,
    justifyContent:"center",
    alignItems: "center",
    bottom:50,
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
