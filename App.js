import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
// import HomeScreen from './src/screens/HomeScreen';
import SearchScreen from './src/screens/SearchScreen';

const navigator = createStackNavigator(
    {
      
      Search: SearchScreen
    },
    {
      // show default screen when start up
      // display the screen when start up
      initialRouteName: 'Search',
      defaultNavigationOptions: {
        title: 'Business Search',
      },
    }
);


export default createAppContainer(navigator);
