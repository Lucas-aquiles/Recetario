import React, { useEffect } from "react";
import data from "../resources/data.json"
import { Searchbar } from "react-native-paper";
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
  const [dataJson, setdataJson] = React.useState([])
  const [resultSearch,setResultSearch] = React.useState("")
  const onChangeSearch = (query) => setSearchQuery(query);

  console.log(dataJson)
  console.log(resultSearch)

  useEffect(() => {
    if(data){
      let result = data.dishes.map(e=> ({id: e.id , title: e.title}) )
      setdataJson(result)
    }
  }, [])

  useEffect(() => {
    if (dataJson){  
    const result = dataJson?.find( e => e.title.slice(0,3) === searchQuery.trim())
    setResultSearch(result)
    }
  }, [searchQuery])
  
  
  

  return (
    <View>   
    <Searchbar
      placeholder="What do you want to eat?"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
    { resultSearch !== undefined ?(  
    <Text style={styles.conta} 
   >
      {resultSearch.title}
    </Text>):(null)}
    </View>
  );
};
const styles = StyleSheet.create({
  conta: {
    borderWidth: 1,
    padding: 20,
    backgroundColor:"white",
    color:"red"
  },
});

export default SearchBarComponent;
