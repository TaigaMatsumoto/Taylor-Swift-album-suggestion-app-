//Import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

const Header = () => 
<View style={styles.viewStyle}>
    <Text style={styles.textStyle}>Album</Text>
</View>;


const styles = {
    viewStyle: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStyle: {
        fontSize: 20
    }
};

export default Header;
