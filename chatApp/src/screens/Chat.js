import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, Text, View, ScrollView, LogBox } from "react-native";
import {Header, Body, Title} from "native-base";
import Input from "../component/Input";
import firebase from "../utils/firebase";
import "firebase/database";
import moment from "moment";
import Message from "../component/Message";
import {map} from "lodash";

LogBox.ignoreLogs(["Setting a timer"]);

const Chat = ({ userName }) => {

    const [messages, setMessages] = useState([]);

    const chatScrollRef = useRef();

    useEffect(() => {
        const chat = firebase.database().ref("general");
        chat.on("value", (snapshot) => {
            setMessages(snapshot.val());
        });
    }, []);

    useEffect(() => {
        chatScrollRef.current.scrollTo({y: 1000000000000});
    }, [messages]);

    const sendMessage = (message) => {
        const time = moment().format("hh:mm a")
        firebase.database()
        .ref("general")
        .push({userName, text: message, time});
    }

    return (
        <>
        <Header style={styles.header} iosBarStyle="light-content">
            <Body>
                <Title style={{color: "#fff"}}>Chat App</Title>
            </Body>
        </Header>
            <View style={styles.content}>
                <ScrollView style={styles.chatView} ref={chatScrollRef}>
                    {map(messages, (message, index) => (
                        <Message 
                            key={index}
                            message={message}
                            name={userName}
                        />
                    ))}
                </ScrollView>
                <Input sendMessage={sendMessage}/>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: "space-between"
    },
    header: {
        backgroundColor: "#16202b"
    },
    chatView: {
        backgroundColor: "#1b2734"
    }
})

export default Chat;