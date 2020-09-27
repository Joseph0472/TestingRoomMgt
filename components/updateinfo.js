import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default function updateinfo() {
    return (
        <TouchableOpacity>
        <View style={styles.task}>
            <Text style={styles.taskText}>Update Product Info</Text>
        </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    taskText: {
        fontSize: 25
      },
    task: {
        padding: 18,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10
    }
});