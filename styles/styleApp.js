import { StyleSheet, Platform, StatusBar } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderColor: '#f00',
        backgroundColor: '#282828',
        alignItems: 'center',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    title:{
        paddingTop:20,
        fontSize:20,
    },

    component: {
        marginTop: 10,
        width: '90%',
    },

    viewTrendingList: {
        height: '30%',
        marginTop: 30
    },

    viewRecentList: {
        marginTop: 20,
    }

});