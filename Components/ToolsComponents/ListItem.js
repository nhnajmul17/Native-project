import React from "react";
import { View, StyleSheet, Text } from "react-native";

import Icon from "./Icon";

export default function ListItem({ imageSrc, imageSize, text, subText, textStyle, value, style }) {
    return (
        <View style={[styles.container, style]}>
            {imageSrc && <Icon image={imageSrc} size={imageSize} />}
            <View style={styles.textContainer}>
                <Text style={[styles.text, textStyle]}>{text}</Text>
                {subText && <Text style={styles.subText}> {subText} </Text>}
            </View>
            {value && (
                <View style={styles.valueContainer}>
                    <Text style={[styles.value, textStyle]}>{value}</Text>
                </View>
            )}
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",

    },
    textContainer: {
        justifyContent: "center",
    },
    text: {
        fontSize: 16,
    },
    subText: {
        fontSize: 14,
    },
    valueContainer: {
        flex: 1,
        marginRight: 15,
        justifyContent: "center",
        alignItems: "flex-end",
    },
    value: {
        fontSize: 15,
    },
});

