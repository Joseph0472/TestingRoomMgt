import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default function Header() {
    return (
        <View style={styles.header}>
            {/* icon here */}
            <View>
                <Text style={styles.headerText}>Testing Room Helper</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',

    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 22,
        color: '#945FA6',
        letterSpacing: 1,
        fontFamily: 'cursive'
    }
})