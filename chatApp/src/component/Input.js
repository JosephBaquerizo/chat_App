import React, {useState} from "react";
import {StyleSheet, View, TouchableOpacity, Platform} from "react-native";
import {Item, Input as InputNB, Icon} from "native-base";

const Input = ({sendMessage}) => {

    const [message, setMessage] = useState("");

    const onSubmit = () => {
        if (message.length > 0) {
            sendMessage(message);
            setMessage("");
        }
    };

    return (
        <View style={styles.container}>
            <Item style={styles.itemInput}>
                <InputNB 
                    placeholder="Mensaje..." 
                    placeholderTextColor="grey"
                    style={styles.input}
                    value={message}
                    onChange={(e) => setMessage(e.nativeEvent.text)}
                />
                <TouchableOpacity onPress={onSubmit}>
                    <Icon name="send" style={styles.send}/>
                </TouchableOpacity>
            </Item>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#16202b",
        paddingBottom: Platform.OS === "ios" ? 20:0,
        paddingHorizontal: 20
    },
    itemInput: {
        borderColor: "#16202b"
    },
    input: {
        color: "#fff"
    },
    send: {
        color: "#fff"
    }
})

export default Input;