import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import MusicTime from './MusicTime';
import { FontAwesome } from '@expo/vector-icons';
import Slider from '@react-native-community/slider';

const MusicControl = (props) => {
    return (
        <View style={styles.container}>

            <View style={styles.time}>
                <Slider style={styles.slider}
                    
                    minimumValue={0}
                    maximumValue={1}
                    minimumTrackTintColor="yellow"
                    maximumTrackTintColor="white"
                    thumbTintColor="yellow"
                />
            </View>
            <View style={styles.musicTime}>
                <Text style={styles.text}>0:00</Text>
                <Text style={styles.text}>3:55</Text>
            </View>
            <View style={styles.musicControlContainer}>
                <Feather name="skip-back" size={35} color="yellow" />
                <MaterialCommunityIcons name="pause-circle" size={80} color="yellow" />
                <Feather name="skip-forward" size={35} color="yellow" />
            </View>


        </View>
    )
}

const styles = StyleSheet.create(
    {
        container: {

            width: '100%',
            alignItems: 'center'

        },
        musicTime: {
            marginTop:-20,
            alignItems: 'flex-start',
            marginLeft: 10,
        },
        musicControlContainer: {
            width: '90%',
            marginTop: 50,
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginBottom: 80,
        },
        
       
        musicTime: {
            width: '90%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            

        },
        text: {
            marginTop: 10,
            color: 'white'
        },
        slider:{
            width:350,
            marginBottom:-10,
           
        }
    }

)

export default MusicControl;