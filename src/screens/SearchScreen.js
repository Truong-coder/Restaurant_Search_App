import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';


// Search Screen component searches on Yelp API
// Anytime that we want any content on the screen to update whatsoever, we're alays going to make use of State
const SearchScreen = () => {
    // got piece of state managed by search screen and passed down that piece of state and a way to change it to our search bar

  const [term, setTerm] = useState('');
  // Create new State to handle the result get back from Yelp API
  const [searchApi, results, errorMessage] = useResults();
  // console.log(results)

  const filterResultsByPrice = (price) =>{
      // price === '$' || '$$' || '$$$'
      return results.filter(result => {
        return result.price === price;
      });
  };
  //   JSX block
  return (
    <View style = {{ marginLeft:15 }}>
    {/* 
        * add another callback down to search bar component
        *
    */}
        
    <SearchBar 
      term={term} 
      onTermChange={setTerm} 
      onTermSubmit={() => searchApi(term)} 
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
    <Text style = {styles.text}> We have found {results.length} results</Text>

    <ResultsList 
        results = {filterResultsByPrice('$')} 
        title = "Cost Effective" 
    />
    <ResultsList 
        results = {filterResultsByPrice('$$')}
        title = "Bit Pricer"
    />
    <ResultsList 
      results = {filterResultsByPrice('$$$')}
      title = "Big Spender"
    />

  </View>
  );
};

  const styles = StyleSheet.create({
    text:{
      marginLeft: 8
    }
  });
  export default SearchScreen;




