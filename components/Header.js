import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import image from '../images/JohnnyCash.jpeg';

const Header = (props) =>{

    return(
      <View style={styles.container}>
      
      <Image style={styles.imageStyle} source={image} />
      <Text style={styles.title}>Hurt</Text>
      <Text style={styles.musician}>Johnny Cash</Text>
      
      
    </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b1e23',
    alignItems:'center',
    justifyContent: 'flex-start',
  },

  imageStyle:{
    marginTop:50,
    width:300,
    height:400,
    borderRadius:20,
    marginBottom:20,
  },
  title:{
    fontSize:20,
    color:'white'
  },
  musician:{
    fontSize:15,
    color:'white'
  }
})

export default Header;

