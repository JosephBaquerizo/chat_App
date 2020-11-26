import React, { useState, useEffect } from "react";
import { StyleSheet, LogBox } from "react-native";
import { Container } from "native-base";
import Login from "./src/screens/Login";
import Chat from "./src/screens/Chat";
import * as Font from "expo-font";

LogBox.ignoreLogs(["Setting a timer"]);

const App = () => {

  const [userName, setUserName] = useState(null);

  useEffect(() => {
    (async () => await Font.loadAsync({
    Roboto: require('native-base/Fonts/Roboto.ttf'),
    Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
    }))();
  }, [])

  return (
    <Container style={styles.container}>
      {!userName ? (
        <Login setUserName={setUserName}/>
      ) : (
        <Chat userName={userName}/>
      )}
    </Container>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#16202b"
  }
})

export default App;