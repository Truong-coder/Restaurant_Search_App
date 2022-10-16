// This component is going to be a reusable component that's going to show a list of results got back from yelp API

import React from 'react';
import { View, 
         Text, 
         StyleSheet, 
         FlatList, 
         TouchableOpacity 
        } from 'react-native';
import { withNavigation } from 'react-navigation';
import ResultsDetail from '../components/ResultsDetail';

// // destructure the props we care about
const ResultsList = ({ title, results, navigation }) => {
    if(!results.length){
        return null;//don't show anything at all
    }
    return (
        <View style ={styles.container}>
            <Text style = {styles.title}>{title}</Text>
            <FlatList 
                // By default a flat list render itself vertically or top to bottom
                // Need a flat list render itself horizontally and left to right
                horizontal // = {true}, make use of JSX
                showsHorizontalScrollIndicator={false} //hide the Scroll Indicator
                data = {results}
                keyExtractor = {result => result.id} // unique and consisteant after rerender
                renderItem = {({ item }) => {
                    // JSX
                    return (
                        /**
                         * The nice thing about TouchableOpacity is that 
                         * it's going to fade out any child elements placed inside of it everytime we push it
                         */
                         <TouchableOpacity 
                         onPress = {()=>navigation.navigate('ResultShow', {id: item.id})}>
                         <ResultsDetail result = {item}/>
                        </TouchableOpacity>          
                    );         
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
// give ResultList access to Navigation
export default withNavigation(ResultsList);