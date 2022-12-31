import React, { useState } from "react";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import Ingredient from "./ingredient";

const IngredientsList = ({data}) => {

    const renderItem = ({ item }) => {
        //const color = item.id === selectedId ? '#F8F8F8' : 'white';

        return (
            <Ingredient
                ingredient={item}
            />
        );
    };

    return (
            <View style={styles.container}>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                />
            </View>
            
    );
};

const styles = StyleSheet.create({
    container: {
        height: '72%',
        width: '100%',
        backgroundColor: '#282828'
    },  

});

export default IngredientsList;