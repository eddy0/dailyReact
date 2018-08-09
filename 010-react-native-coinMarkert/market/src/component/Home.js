import React from 'react'
import {StyleSheet, Text, View, Animated, FlatList, ActivityIndicator, Dimensions} from 'react-native'
import Card from './Card'
import {getData} from '../utils/api'



export default class Home extends React.Component {
    state = {
        data: null,
        refreshing: false,
    }
    
    fetchData = () => {
        this.setState({
            refreshing: true,
        })
        
        fetch('https://api.coinmarketcap.com/v1/ticker/')
            .then(data => data.json())
            .then(data => {
                setTimeout(() => {
                    this.setState(() => ({
                        data,
                        refreshing: false
                    }))
                }, 2000)
            })
        
        // getData().then(data => {
        //     this.setState(() => ({
        //         data,
        //         refreshing: false,
        //     }))
        // })
        
    }
    
    componentDidMount() {
        this.fetchData()
    }
    
    renderItem = ({item}) => {
        return (
            <Card item={item} />
        )
    }
    
    render() {
        if (this.state.data === null) {
            return (
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <ActivityIndicator size='large' color={'#236add'} />
                </View>
            )
        }
        
        return (
            <View style={styles.container}>
                <Text style={{fontSize: 30}}>Coin Market</Text>
                <FlatList keyExtractor={item => item.id}
                    data={this.state.data}
                    renderItem={this.renderItem}
                    onRefresh={this.fetchData}
                    refreshing={this.state.refreshing}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    list: {
        marginBottom: 20,
        borderBottomColor: '#e5e5e5',
        borderBottomWidth: 3,
        padding: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: Dimensions.get('window').width,
    },
})
