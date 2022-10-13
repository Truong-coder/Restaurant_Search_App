import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';

const navigator = createStackNavigator(
    {
      Home: HomeScreen
    },
    {
      // show default screen when start up
      // display the screen when start up
      initialRouteName: 'Home',
      defaultNavigationOptions: {
        title: 'App',
      },
    }
);
const styles = StyleSheet.create({});

export default createAppContainer(navigator);
