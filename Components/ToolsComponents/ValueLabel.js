import React from "react";
import { View, Text, StyleSheet } from "react-native";

// import color from "../config/colors";
import Label from "./Label";

export default function ValueLabel({ text, value, fontSize, fontColor }) {
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={{ color: "#fff" }}>{text}</Text>
            </View>

            <View style={styles.labelContainer}>
                <Label text={value} style={{ fontSize: fontSize, color: fontColor }} />
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
    },
});
