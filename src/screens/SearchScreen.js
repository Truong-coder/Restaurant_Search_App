import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
// Search Screen component searches on Yelp API

const SearchScreen = ({navigation}) =>{
    // got piece of state managed by search screen and passed down that piece of state and a way to change it to our search bar
    const [term, setTerm] = useState('')
    return(
        <View>
            {/* 
            * add another callback down to search bar component
            *
            */}
            <SearchBar 
                term = {term} 
                onTermChange = {newTerm => setTerm(newTerm)}
                onTermSubmit = { () => console.log(' Term was submitted ')}
            />    
            <Text> This is Search Screen</Text>
            <Text> {term} </Text>
        </View>
    );
}

const styles = StyleSheet.create({

});

export default SearchScreen;