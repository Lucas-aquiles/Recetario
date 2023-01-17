import * as React from "react";
import { Searchbar } from "react-native-paper";
// import { StyleSheet } from 'react-native';
import { styles } from "../styles/styleApp";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  StatusBar,
  Platform,
} from "react-native";
const SearchBarComponent = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query) => setSearchQuery(query);
  console.log(searchQuery)
  return (
    <View>   
    <Searchbar
      placeholder="What do you want to eat?"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
    </View>
  );
};

export default SearchBarComponent;
