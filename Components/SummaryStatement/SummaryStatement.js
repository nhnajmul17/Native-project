import React from "react";
import { Text, StyleSheet, View, FlatList, TouchableOpacity } from "react-native";

import ListItem from "../ToolsComponents/ListItem";
import Icon from "../ToolsComponents/Icon";

const Data = [
    {
        id: 1,
        y: 100000,
        name: "Asset",
        src: require("../../assets/Icon/asset2.png"),
        target: "Asset Statement"
    },
    {
        id: 2,
        y: 50000,
        name: "Loan",
        src: require("../../assets/Icon/loan2.png"),
        target: ""
    },
    {
        id: 3,
        y: 100000,
        name: "Investment",
        src: require("../../assets/Icon/investment2.png"),
        target: "Investment Statement"
    },
    {
        id: 4,
        y: 2000,
        name: "Expenditure",
        src: require("../../assets/Icon/expenditure2.png"),
        target: ""
    },
];


export default function SummaryStatement({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.informationContainer}>
                <FlatList
                    data={Data}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <TouchableOpacity  >
                            <ListItem
                                imageSrc={item.src}
                                imageSize={50}
                                text={item.name}
                                value={`$ ${item.y}`}
                                style={styles.listItem}
                            />
                        </TouchableOpacity>
                    )}
                />
            </View>

            <View style={styles.footer}>
                <View style={styles.settingsIcon}>
                    <Icon image={require("../../assets/Icon/settings.png")} size={40} />
                </View>
                <View style={styles.notificationIcon}>
                    <Icon image={require("../../assets/Icon/notification.png")} size={40} />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    informationContainer: {
        marginHorizontal: 20,
        marginVertical: 10,
    },
    listItem: {
        backgroundColor: "#f4f4f4",
        margin: 5,
        borderRadius: 25,
    },
    footer: {
        flex: 1,
        alignItems: "flex-end",
        flexDirection: "row",
        backgroundColor: "#f4f4f4"
    },
    settingsIcon: {
        flex: 1,
        marginHorizontal: 40,
    },
    notificationIcon: {
        flex: 1,
        marginHorizontal: 40,
    },
});


