import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Header from './header';

export default function addinfo() {
    return (
        <View>
            <TouchableOpacity>
            <View style={styles.task}>
                <Text style={styles.taskText}>Add Product Info</Text>
            </View>
            </TouchableOpacity>
        </View>
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
    }
});
  