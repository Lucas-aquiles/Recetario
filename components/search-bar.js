import * as React from 'react'
import { Searchbar } from 'react-native-paper'
// import { StyleSheet } from 'react-native';
import { styles } from "../styles/styleApp"


const SearchBarComponent = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);


  return (
    <Searchbar
      placeholder='What do you want to eat?'
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
  );


}

export default SearchBarComponent