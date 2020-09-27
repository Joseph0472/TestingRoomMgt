import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Homepage from '../screens/homepage';
import Addinfopage from '../screens/addinfopage';
import Updateinfopage from '../screens/updateinfopage';
import Showsummarypage from '../screens/showsummarypage';

const screens = {
    Home: {
        screen: Homepage
    },
    AddInfo: {
        screen: Addinfopage
    },
    UpdateInfo: {
        screen: Updateinfopage
    },
    ShowSummary: {
        screen: Showsummarypage
    }
    
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);