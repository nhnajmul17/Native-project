import React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';

export default function InputBox({ text, onChangeText }) {
    return (
        <View style={styles.container}>
            <Text style={styles.label}> {text}: </Text>
            <TextInput
                style={styles.inputText}
                selectionColor={'black'}
                placeholder={'Enter ' + text}
                placeholderTextColor="#000"
                onChangeText={onChangeText}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        height: 90,
        padding: 10,
        marginVertical: 5,
        marginHorizontal: 20,
        backgroundColor: "#f4f4f4"
    },
    label: {
        fontSize: 15,
        paddingLeft: 2,
        marginBottom: 5,
        height: 25,
        color: 'black',
    },
    inputText: {
        height: 40,
        backgroundColor: "#fff",
        borderRadius: 5,
        borderColor: 'black',

        padding: 10
    }

});
