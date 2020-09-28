import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import Homepage from './screens/homepage'
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { globalStyles } from './styles/global'
import Navigator from './routes/homeStack'

const getFonts = () => {
  return Font.loadAsync({
    'avenirLTProRoman': require('./assets/fonts/avenir-lt-55-roman.ttf')
  })
}

export default function App() {
  const [people, setPeople] = useState([
    {name: 'Mario', id:'1'},
    {name: 'Mario2', id: '2'},
    {name: 'Mario3', id: '3'},
    {name: 'Mario4', id: '4'},
    {name: 'Mario5', id: '5'},
    {name: 'Mario6', id: '6'},
    {name: 'Mario7', id: '7'},
    {name: 'Mario8', id: '8'},
  ])

  const [fontsLoaded, setFontsLoaded] = useState(false);
  
  // if(fontsLoaded) {
  //   return (
  //     <View style={globalStyles.container}>
  //       <Home />
  //     </View>
  //   );
  // } else {
  //   <AppLoading 
  //     startAsync={getFonts}
  //     onFinish = {() => setFontsLoaded(true)}
  //   />
  // }
  return (
    <View style={globalStyles.container}>
      <Navigator />
    </View>
  );
}
