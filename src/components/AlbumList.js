import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';


class AlbumList extends Component {
    state = { youu : [] };

    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
         .then(response => this.setState ({ youu : response.data }));
    }
    render() {
        return (
            <View>
                <Text>Youu List</Text>
            </View>
        );
    };
};
 
export default AlbumList;
