import React from 'react';
import { View } from 'react-native';
import SearchBarComponent from "./search-bar.js";
import { styles } from "../styles/styleApp"
import TrendingList from './trending-list.js';
import * as data from '../resources/data.json';

const MainScreen = ({ navigation }) => {
    const getRecents = () => {
        let recent = []
        let trending = []
        data.dishes.forEach((recipe) => {
            (recipe.recent) ? recent.push(recipe) : trending.push(recipe)
        })

        return { recent, trending }
    }
    const { recent, trending } = getRecents();

    return (
        <View style={styles.container}>
            <View style={styles.component} >
                <SearchBarComponent />
            </View>


            <View style={styles.viewTrendingList}>
                <TrendingList
                    title={"TRENDING"}
                    width={110}
                    height={110}
                    data={trending}
                    navigation={navigation}
                />
            </View>
            <View style={styles.viewRecentList}>
                <TrendingList
                    title={"RECENT"}
                    width={130}
                    height={160}
                    data={recent}
                    navigation={navigation}
                />
            </View>

        </View>
    )
}

export default MainScreen