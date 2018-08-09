import React from 'react'
import {StyleSheet, Button, View, TextInput} from 'react-native'



export default class Header extends React.Component {
    state = {
        text: '',
    }
    
    press = (e) => {
        console.log(e)
        e.preventDefault()
    }
    
    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.form} onChangeText={(text) => this.setState({text})} value={this.state.text} />
                <Button title='ask' style={styles.button} onPress={this.press} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    form: {
        flex: 1,
        height: 40,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#cccccc',
        paddingHorizontal: 20,
    },
    button: {
        marginLeft: 5,
        width: 50,
        height: 40,
        backgroundColor: '#rgb(35, 106, 221)',
        color: 'white',
        fontSize: 22,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'rgb(35, 106, 221)',
    },
})
