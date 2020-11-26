import React, { useState } from "react";
import { StyleSheet, SafeAreaView, StatusBar, Image, View, Text } from "react-native";
import { Item, Input, Button } from "native-base";
import logoApp from "../../assets/chatLogo.png";

const Login = ({ setUserName }) => {

    const [name, setName] = useState("");

    const onSubmit = () => {
            setUserName(name);
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content"/>
            <View>
                <Image source={logoApp} resizeMode="contain" style={styles.logo}/>
            </View>
            <Item>
                <Input
                    placeholder="Nombre de usuario"
                    style={{color: "#fff"}}
                    placeholderTextColor= "grey"
                    value={name}
                    onChange={(e) => setName(e.nativeEvent.text)}
                />
            </Item>
            <Button style={styles.btnLogin} onPress={onSubmit}>
                <Text 
                    style={{color: "#fff", fontWeight: "bold", fontSize: 17}}>
                    Entrar
                </Text>
            </Button>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    logo: {
        width: "100%",
        height: 200,
        marginBottom: 30 
    },
    container: {
        marginHorizontal: 50,
        marginVertical: 100,
    },
    btnLogin: {
        marginTop: 40,
        justifyContent: "center",
        backgroundColor: "#0098d3",
        width: "100%"
    }
});

export default Login;