//import libraries

import React from 'react';
import { AppRegistry, View }  from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

//Create component

const App = () => (
    <View>
        <Header headerText = { 'Youu' } />
        <AlbumList />
    </View>
);

//Render

AppRegistry.registerComponent('youu', () => App);