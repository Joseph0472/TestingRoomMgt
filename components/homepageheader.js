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
        backgroundColor : '#945FA6',
      },
    title : {
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30,
        fontFamily: 'Times New Roman'
    }
});