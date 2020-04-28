
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import CaseUpdateCovid from '../screens/CaseUpdateCovid/CaseUpdateCovid';
import KnowAboutCovid from '../screens/KnowAboutCovid/KnowAboutCovid';

const NavigatorScreen = createStackNavigator(
    {
        CaseUpdateCovid,
        KnowAboutCovid
    },

    {
        initialRouteName: 'CaseUpdateCovid',
        headerMode: 'none',
        navigationOptions:
        {
            headerVisible: false,
        }
    }
);

export const AppContainer = createAppContainer(NavigatorScreen)    