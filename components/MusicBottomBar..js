import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { EvilIcons } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import { SimpleLineIcons } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 

const MusicBottomBar = ()=>{

    return(
        <View style={styles.contianer}>
            <EvilIcons name="heart" size={24} color="wheat" />
            <Ionicons name="repeat" size={24} color="wheat" />
            <Feather name="upload" size={24} color="wheat" />
            <SimpleLineIcons name="options" size={24} color="wheat" />
        </View>
    )
}
const styles = StyleSheet.create(
    {
      contianer:{
         
          borderTopWidth:1,
          borderTopColor:'wheat',
          height:40,
          width:'100%',
          flexDirection:'row',
          justifyContent:'space-around',
          alignItems:'center'
      }  
    }
)
export default MusicBottomBar;