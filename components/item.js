import React from "react";
import { TouchableOpacity, Text, Image, StyleSheet } from "react-native";

const Item = ({ item, onPress, textColor, width, height }) => (

    < TouchableOpacity onPress={onPress} style={[styles.item]} >
        <Image
            style={[styles.img, width, height]}
            source={{ uri: item.img }}
        />
        <Text style={[styles.title, textColor]}>{item.title}</Text>
    </TouchableOpacity >
);

const styles = StyleSheet.create({
    title: {
        fontSize: 15,
        textAlign: 'center',
        tintColor: 'white',
        fontWeight: '300',

    },
    img: {
        borderRadius: 7,
    },
    item: {
        marginVertical: 8,
        marginHorizontal: 6
    },
})

export default Item;