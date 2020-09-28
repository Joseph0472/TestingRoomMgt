import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Header from '../components/homepageheader';
import { globalStyles } from '../styles/global'

export default function Homepage({navigation}) {
    //console.log(navigation.navigate)
    const pressHandler = (props) => {
        //console.log(props)
    }

    return (
        <View>
            <TouchableOpacity onPress={() => navigation.navigate('AddInfo')}>
                <View style={globalStyles.task}>
                    <Text style={globalStyles.taskText}>Add Product Info</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('UpdateInfo')}>
                <View style={globalStyles.task}>
                    <Text style={globalStyles.taskText}>Update Product Info</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('ShowSummary')}>
                <View style={globalStyles.task}>
                    <Text style={globalStyles.taskText}>Show Summary</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}