import React from "react";
import { View, Text, StyleSheet } from "react-native";

// import Label from "./Label";

export default function ValueLabel({ text, value, fontSize, fontColor }) {
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={{ color: "#000" }}>{text}</Text>
            </View>

            <View style={styles.labelContainer}>
                <Text style={[styles.textStyle, fontSize]} style={{ color: fontColor }} numberOfLines={1}>${value}</Text>
                {/* <Label text={value} style={{ fontSize: fontSize, color: fontColor }} /> */}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 5,
        flexDirection: "row",
        alignItems: 'center'
    },
    textContainer: {
        padding: 5,
        width: "30%",
        alignItems: "center",
    },
    labelContainer: {
        padding: 2,
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
