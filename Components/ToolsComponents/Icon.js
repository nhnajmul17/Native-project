import React from "react";
import {
    StyleSheet,
    Image,
    View,
    Text,
} from "react-native";


export default function Icon({ title, size, image, backgroundColor }) {
    return (
        <View style={styles.container}>
            <View
                style={{
                    width: size,
                    height: size,
                    borderRadius: size / 2,
                    backgroundColor,
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Image
                    source={image}
                    style={[styles.image, { height: size * 0.7, width: size * 0.7 }]}
                />
            </View>

            {title && <Text style={styles.title}> {title}</Text>}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 5,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        flex: 1,
        resizeMode: "contain",
    },
    title: {
        fontSize: 12,
        marginTop: 5,
    },
});

