import React, { Component, useEffect } from 'react';
import {  View, Text} from 'react-native';
import {
    SafeAreaView,
    StatusBar
} from 'react-native';

import SplashScreen from 'react-native-splash-screen';

import { AppContainer } from './router'
class App extends Component {
    
    imageView = () => {
            setInterval(() => {
                return (
                    <View>
                        <Text>Helllo</Text>
                    </View>
                )
                
            }, 3000);
   }
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                {
                     this.imageView()   
                }
                <AppContainer />

                </SafeAreaView>
         
         )
    }
}

export default App;