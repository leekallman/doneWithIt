import React from 'react';
import { ImageBackground, StyleSheet, View, Text } from 'react-native';

import colors from '../config/colors.js'

function WelcomeScreen(props) {
    return (
        <ImageBackground
            style={styles.background}
            source={require('../assets/favicon.png')}>
            <View style={styles.container}>
                <Text>hello</Text>
            </View>
            <View style={styles.container2}>
                <Text>there</Text>
            </View>
        </ImageBackground>

    );
}
const styles = StyleSheet.create({
    background: {
        width: "50%",
        height: "50%",
        flexDirection: "row",
    },
    container: {
        width: "100%",
        backgroundColor: colors.primary
    },
    container2: {
        width: "100%",
        backgroundColor: colors.secondary
    }

})
export default WelcomeScreen;

