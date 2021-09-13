import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import { Feather } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import  Header from './components/Header';
import MusicControl from './components/MusicControl';
import MusicBottomBar from './components/MusicBottomBar.';
import MusicTime from './components/MusicTime';

export default function App() {
  return (
    <View style={styles.container}>
      
     <Header />
   
     <MusicControl />
     <MusicBottomBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   
    flex: 1,
    backgroundColor: '#1b1e23',
    
  },

 
});
