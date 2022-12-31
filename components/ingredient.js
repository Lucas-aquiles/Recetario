import React from "react";
import { TouchableOpacity, Text, Image, StyleSheet, View } from "react-native";

const Ingredient = ({ ingredient }) => (

    < View style= {styles.container}>
        <View style={[styles.item]}>
            <Text style={styles.name}>{ingredient.name}</Text>
            <View style={styles.amountView}><Text style={styles.amount}>{ingredient.amount}</Text></View>
        </View>
        <View style={styles.separator}></View>
    </View >
    
);

const styles = StyleSheet.create({
    container:{
        marginHorizontal: 15,
        marginTop: 20,
    },
    name: {
        width: '70%',
        fontSize: 15,
        color: 'white',
    },
    amountView: {
        flexDirection: 'row-reverse',
        width: '30%',
    },
    amount: {
        fontSize: 15,
        color: 'white',

    },
    item: {
        flexDirection:'row',
        
    },
    separator:{
        borderTopWidth: 0.5,
        borderColor: 'white'
    }
})

export default Ingredient;