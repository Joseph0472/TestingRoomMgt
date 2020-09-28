import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Homepage from '../screens/homepage';
import Addinfopage from '../screens/addinfopage';
import Updateinfopage from '../screens/updateinfopage';
import Showsummarypage from '../screens/showsummarypage';
import { Image } from 'react-native';
import Header from '../components/header'
import React from 'react'

const screens = {
    Home: {
        screen: Homepage,
        navigationOptions: {
            headerTitle: () => <Header />,
        }
    },
    AddInfo: {
        screen: Addinfopage
    },
    UpdateInfo: {
        screen: Updateinfopage
    },
    ShowSummary: {
        screen: Showsummarypage,
        navigationOptions: {
            title: 'Summary',
        }
    }
    
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: { backgroundColor: '#eee', height: 60 }
    }
});

export default createAppContainer(HomeStack);