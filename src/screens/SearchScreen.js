import React, { useState } from 'react';
import { View, 
         Text, 
         StyleSheet, 
         ScrollView, 
        } from 'react-native';
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

  const filterResultsByPrice = price => {
      // price === '$' || '$$' || '$$$'
      return results.filter(result => {
        return result.price === price;
      });
  };
  //   JSX block
  return (

    /**
     * use 'flex:1' when have some content that's being cut off or is expanding off
     * use this empty placeholder '<> </>' whenever need to return a grouping of elements
     * using '<View> </View>' placeholder could be harmful to the layout overall
     */
    
    <> 
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

    <ScrollView>
      <Text style = {styles.text}> We have found {results.length} results</Text>
      <ResultsList 
          results = {filterResultsByPrice('$')} 
          title = "Cost Effective"
          // navigation = {navigation} //add in a navigation props
      />
      <ResultsList 
          results = {filterResultsByPrice('$$')}
          title = "Bit Pricer"
          // navigation = {navigation} 
      />
      <ResultsList 
        results = {filterResultsByPrice('$$$')}
        title = "Big Spender"
        // navigation = {navigation} 
      />

    </ScrollView>
    
  </>
  );
};

  const styles = StyleSheet.create({
    text:{
      marginLeft: 8
    }
  });
  export default SearchScreen;




