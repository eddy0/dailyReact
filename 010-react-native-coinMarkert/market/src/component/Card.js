import React from 'react'
import {Dimensions, StyleSheet, Text, View} from 'react-native'



const Card = ({item}) => {
    let hourColor = Number(item.percent_change_1h) > 0 ? 'red' : 'green'
    let dayColor = Number(item.percent_change_24h) > 0 ? 'red' : 'green'
    let weekColor = Number(item.percent_change_7d) > 0 ? 'red' : 'green'
    return (
        <View style={styles.container}>
            <View style={styles.basic}>
                <Text style={{fontSize: 22, fontWeight: 'bold'}}> {item.symbol} </Text>
                <Text style={{fontSize: 18}}>| {item.name}</Text>
                <Text style={{fontSize: 22, marginLeft: 'auto'}}> ${parseFloat(item.price_usd).toFixed(2)} </Text>
            </View>
            <View style={styles.trend}>
                <View style={styles.box}>
                    <Text style={{fontSize: 18, marginRight: 3}}>HOUR</Text>
                    <Text style={{fontSize: 18, color: hourColor}}> {item.percent_change_1h} </Text>
                </View>
                <View style={styles.box}>
                    <Text style={{fontSize: 18, marginRight: 3}}>DAY</Text>
                    <Text style={{fontSize: 18,   color: dayColor}}>{item.percent_change_24h}</Text>
                </View>
                <View style={styles.box}>
                    <Text style={{fontSize: 18, marginRight: 3}}>WEEK</Text>
                    <Text style={{fontSize: 18,  color: weekColor}}> {item.percent_change_7d} </Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        borderBottomColor: '#e5e5e5',
        borderBottomWidth: 3,
        padding: 15,
        // alignItems: 'center',
        // justifyContent: 'space-between',
    },
    basic: {
        flexDirection: 'row',
        paddingBottom: 15,
        marginBottom: 15,
        borderBottomColor: '#f6f6f6',
        borderBottomWidth: 1,
        alignItems: 'center',
    },
    trend: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    box: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    
})

export default Card