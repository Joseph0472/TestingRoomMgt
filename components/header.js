import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function header() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>Testing Room Helper</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 70,
        padding: 20,
        backgroundColor : '#945FA6',
      },
    title : {
        textAlign: 'center',
        color: '#fff',
        fontSize: 30,
        fontFamily: 'avenirLTProRoman'
    }
});