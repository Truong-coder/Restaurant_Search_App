import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ResultsDetail = ({ result }) => {
    return(
        <View style = {styles.container}>
            {/* 
            *The outer one means we're about to refer to a JS expression
            *The inner one means is fomrming the actual object that we want to pass to this
            * specify the image or where to get this image from with the 'uri' prop
            */}
            <Image 
                style = {styles.image} 
                source={{ uri:result.image_url }}/>
            <Text style = {styles.name}>{result.name}</Text>
            <Text>{result.rating} Stars, {result.review_count} Reviews </Text>
           
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 10 
    },
    image: {
        width: 250,
        height: 120,
        borderRadius: 4 //round the image's border
    },
    name: {
        fontWeight: 'bold',
    }
});

export default ResultsDetail;