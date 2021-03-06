//import libraries

import React from 'react';
import { Text, View } from 'react-native';

//Create component

const Header = (props) => {

    const { textStyle, viewStyle } = styles;

    return (
    <View style = { viewStyle }>
    <Text style = { textStyle }>{ props.headerText }</Text>
    </View>
   );
};

const styles = {
    viewStyle : {
        backgroundColor : '#F8F8F8',
        justifyContent : 'center',
        height : 60,
        alignItems : 'center',
        paddingTop : 15,
        shadowColor : '#000',
        shadowOffset : { width : 0, height : 2},
        shadowOpacity : 0.2,
        elevation : 2,
        position : 'relative',
        marginBottom : 5
    },
    textStyle : {
        fontSize : 20
    }
};

//Render

export default Header;
