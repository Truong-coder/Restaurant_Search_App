// This component is going to be a reusable component that's going to show a list of results got back from yelp API

import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ResultsDetail from '../components/ResultsDetail';



// // destructure the props we care about
const ResultsList = ({ title, results }) => {
    return (
        <View style ={styles.container}>
            <Text style = {styles.title}>{title}</Text>
            <FlatList 
                // By default a flat list render itself vertically or top to bottom
                // Need a flat list render itself horizontally and left to right
                horizontal // = {true}, make use of JSX
                data = {results}
                keyExtractor = {result => result.id} // unique and consisteant after rerender
                renderItem = {({ item }) => {
                    // JSX
                    return <ResultsDetail result = {item}/>;
                        // <Text>{item.name}</Text>
                        
                }}
            />
        </View>
    );

};

const styles = StyleSheet.create({
    title:{
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10,
        marginBottom: 15
        
    },
    container: {
        marginBottom: 10
    }
});
export default ResultsList;