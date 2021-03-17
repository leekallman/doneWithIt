// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View, Alert, Image, SafeAreaView, Button, Plattform, Platform, StatusBar, Dimensions } from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks'
import WelcomeScreen from './app/screens/WelcomeScreen';

export default function App() {
  const handlePress = () => console.log("text pressed")

  const { landscape } = useDeviceOrientation();

  return (
    <SafeAreaView style={styles.container}>
      <WelcomeScreen />
      {/* safeareaview only works on iOS */}
      <Text onPress={handlePress}>Hello Lisa!</Text>
      {/* <Image source={require('./app/assets/icon.png')} /> */}
      <TouchableHighlight onPress={() => console.log("image tapped")}>
        <Image
          fadeDuration={1000}
          // fade duration only works on andriod
          source={{
            width: 100,
            height: 100,
            uri: "https://picsum.photos/200/300"
          }} />
      </TouchableHighlight>
      <Button
        color="orange"
        title="Click me"
        onPress={() => Alert.alert("My title", "My message", [
          { text: "Yes", onPress: () => console.log("yes") },
          { text: "No", onPress: () => console.log("no") },
        ])} />
      <Button
        color="blue"
        title="Click me"
        onPress={() =>
          Alert.prompt("My title", "My message", text => console.log(text))} />
      {/* prompt only works on iOS
      {/* <StatusBar style="auto" /> */}
      <View style={{
        backgroundColor: "dodgerblue",
        flex: 4,
        width: "100%",
        height: landscape ? "100%" : "30%",
      }}>
      </View>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 5,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    alignItems: 'center',
    // justifyContent: 'center',
  },
});
