import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import Header from './components/header';
import AddInfo from './components/addinfo';
import UpdateInfo from './components/updateinfo';
import ShowSummary from './components/showsummary';

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

  return (
    <View style={styles.container}>
      <Header />
      <AddInfo />
      <UpdateInfo />
      <ShowSummary />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },

  boldText: {
    fontWeight: 'bold',
    fontFamily: 'Times New Roman',
    fontSize: 20
  },
  taskText: {
    fontWeight: 'bold',
    fontSize: 40
  },
  body: {
    backgroundColor: '#CCCCC',
    padding: 20
  },
  buttonContainer: {
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 10,
    margin: 10,
    width: 200,
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 30,
  }
});
