import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import Home from './src/component/Home'
import Header from './src/component/Header'



export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Home />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        marginTop: 30,
    },
})
