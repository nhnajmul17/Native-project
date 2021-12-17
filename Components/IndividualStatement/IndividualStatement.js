import React, { useState } from "react";
import { View, StyleSheet, Text, FlatList, Pressable } from "react-native";
import Dropdown from "../ToolsComponents/DropDown";
import Icon from "../ToolsComponents/Icon";
import ListItem from "../ToolsComponents/ListItem";

const persons = [
    "Martin",
    "Alex",
    "Hunter",
    "Anderson"
];

const data = [
    {
        id: 1,
        month: "November, 2021",
        installment: 5000,
    },
    {
        id: 2,
        month: "October, 2021",
        installment: 2000,
    },
    {
        id: 3,
        month: "September, 2021",
        installment: 2000,
    },
    {
        id: 4,
        month: "August, 2021",
        installment: 2500,
    },
    {
        id: 5,
        month: "July, 2021",
        installment: 2500,
    },

];

export default function IndividualStatement(props) {
    const [name, setName] = useState();
    const onSelect = (selectItem) => {
        setName(selectItem);
    };
    return (

        <View style={styles.container}>
            <Dropdown dataArray={persons} text={"Person"} onSelect={onSelect} />

            {name && (
                <View>
                    <View style={styles.basicInfo}>
                        <Text style={styles.basicInfoText}>Total Amount: 100000 </Text>
                    </View>

                    <View style={styles.list}>
                        <FlatList
                            data={data}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => (
                                <ListItem
                                    text={item.month}
                                    value={item.installment}
                                    textStyle={styles.listTextStyle}
                                    style={styles.listItem}
                                />
                            )}
                        />
                    </View>
                </View>
            )}
            <View style={styles.bottomSection}>
                <View style={styles.footer}>
                    <View style={styles.settingsIcon}>
                        <Pressable onPress={() => alert('Settings Are building')} >
                            <Icon image={require("../../assets/Icon/settings.png")} size={40} />
                        </Pressable>
                    </View>
                    <View style={styles.notificationIcon}>
                        <Pressable onPress={() => alert('No notification for now')} >
                            <Icon image={require("../../assets/Icon/notification.png")} size={40} />
                        </Pressable>

                    </View>
                </View>
            </View>
        </View>

    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    basicInfo: {
        backgroundColor: "#f4f4f4",
        marginHorizontal: 20,
        padding: 10,
    },
    basicInfoText: {
        fontSize: 15,
    },
    list: {
        marginHorizontal: 20,
        marginTop: 10,
    },
    listItem: {
        backgroundColor: "#f4f4f4",
        paddingVertical: 5,
        paddingLeft: 10,
        paddingRight: 20,
        marginVertical: 1,
        justifyContent: "center",
    },
    listTextStyle: {
        fontSize: 15,
        paddingLeft: 10,
    },
    bottomSection: {
        flex: 1,
        justifyContent: "flex-end",
        backgroundColor: "#f4f4f4",
    },
    footer: {
        backgroundColor: "white",
        flexDirection: "row",
        justifyContent: "center",
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