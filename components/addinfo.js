import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default function addinfo() {
    return (
        <TouchableOpacity>
        <View style={styles.task}>
            <Text style={styles.taskText}>Add Product Info</Text>
        </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    taskText: {
        fontSize: 25
      },
    task: {
        padding: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10
    }
});
  