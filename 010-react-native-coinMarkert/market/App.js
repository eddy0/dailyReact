import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import Home from './src/component/Home'
import Header from './src/component/Header'

import {createBottomTabNavigator} from 'react-navigation'



class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={{fontSize: 30}}>Hello Android!</Text>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        marginTop: 30,
    },
})

const options = {
    initialRouteName: 'App',
    navigationOptions: {
        tabBarOptions: {
            labelStyle: {
                fontSize: 18,
                lineHeight: 18,
            },
            style: {
                backgroundColor: '#f6f6f6',
                padding: 10
            },
        },
        headerTintColor: '#fff',
        animationEnabled: true,
    },
}

const Nav = createBottomTabNavigator({
    App: {screen: App},
    Home: {screen: Home},
    Header: {screen: Header},
}, options)

export default Nav
