import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import MusicBottomBar from './MusicBottomBar.';
import { FontAwesome } from '@expo/vector-icons'; 
const MusicTime = (props)=>{

    return(
        <View style={styles.container}>
            
            <View style={styles.time}>
                <View style={styles.currentTime}>
                    
                <FontAwesome name="circle" size={15} color="yellow" style={styles.circle} />
                    
                </View>
            </View>
            <View style={styles.musicTime}>
            <Text style={styles.text}>0:00</Text>
            <Text style={styles.text}>3:55</Text>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create(
    {
        container :{
            flex:1,
            marginTop:20,
            alignItems:'center',
            justifyContent:'center'
           
        },
        time:{

            width:'80%',
            backgroundColor:'white',
            height:2,
        },
        currentTime:{
            width:'40%',
            backgroundColor:'yellow',
            height:2,

        },
        circle:{
           marginTop:-6,
            marginLeft:110,
        alignSelf:'center',
            
        },
       musicTime:{
             width:'90%',
           flexDirection:'row',
           justifyContent:'space-between',
           alignItems:'center',

           
       } ,
       text:{
           marginTop:10,
           color:'white'
       }
    }
)


export default MusicTime;