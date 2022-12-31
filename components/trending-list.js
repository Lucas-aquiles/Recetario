import React, { useState } from "react";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import Item from "./item";

const TrendingList = ({ title, width, height, data, navigation }) => {
    const [selectedId, setSelectedId] = useState(null);

    const renderItem = ({ item }) => {
        const color = item.id === selectedId ? '#F8F8F8' : 'white';

        return (
            <Item
                item={item}
                onPress={() => {
                    setSelectedId(item.id);
                    navigation.navigate('InfoScreen', item)
                }}
                textColor={{ color }}
                width={{ width }}
                height={{ height }}
            />
        );
    };

    return (
        <View>
            <Text style={styles.sectionName}>{title}</Text>
            
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    extraData={selectedId}
                    horizontal={true}
                />
        </View>
    );
};

const styles = StyleSheet.create({
    sectionName: {
        color: '#C33A6A',
        paddingLeft: 15,
        fontSize: 20,
        letterSpacing: 2,
        fontWeight: '500',
    },

});

export default TrendingList;