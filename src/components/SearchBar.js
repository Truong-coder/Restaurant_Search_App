import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Colors from '../Color';
import { Feather } from '@expo/vector-icons';
// 
// destructure 2 props
const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return (
        <View style={styles.backgroundStyle}>
            <Feather name="search" style={styles.iconStyle} />
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.inputStyle}
                // add a prop to show fadded out text
                placeholder="Search" //
                value={term}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}
      />
    </View>
    );
};

const styles = StyleSheet.create({
    backgroundStyle: {
        marginTop: 15,
        backgroundColor: 'FloralWhite',
        height: 50,
        borderRadius: 10,
        marginHorizontal: 10,
        marginRight: 10,
        flexDirection: 'row'
    },
    inputStyle: {
        borderColor: 'black',
        flex: 1, //use as much as space
        fontSize: 18
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center', //change a single element
        marginHorizontal: 15
    }
});

export default SearchBar;