import React from 'react';


import { StyleSheet, Text, View, YellowBox } from "react-native";
export default function Label({ text, style }) {
    return (
        <View style={styles.container}>
            <Text style={[styles.textStyle, style]} numberOfLines={1}> {text}</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        backgroundColor: "#f0f0f0",
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textStyle: {
        paddingVertical: 2,
        paddingHorizontal: 10
    },

});