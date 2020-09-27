import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Header from '../components/header';
import AddInfo from '../components/addinfo';
import UpdateInfo from '../components/updateinfo';
import ShowSummary from '../components/showsummary';
import { globalStyles } from '../styles/global'

export default function Homepage() {
    return (
        <View>
            <Header />
            <AddInfo />
            <UpdateInfo />
            <ShowSummary />
        </View>
    )
}