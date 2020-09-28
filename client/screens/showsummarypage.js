import React from 'react';
import { View, Text, Button } from 'react-native';

export default function showsummarypage({ navigation }) {
    
    const pressHandler = () => {
        fetch("http://localhost:10000/api/msg").then(res => console.log(res));
    }

    return (
        <View>
            <Text>This is show summary page.</Text>
            <Button title='Hello'onPress={pressHandler} />
            <Text>There's a button above.</Text>
        </View>
    )
}