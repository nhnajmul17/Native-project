import React, { useState } from "react";
import SelectDropdown from "react-native-select-dropdown";
import { StyleSheet, View, Text } from "react-native";
import ListItem from "./ListItem";

export default function Dropdown({ dataArray, text, onSelect }) {
    return (
        <View style={styles.container}>
            <Text style={styles.label}> {text}: </Text>
            <SelectDropdown
                data={dataArray}
                onSelect={onSelect}
                defaultButtonText={"Select " + text}
                buttonTextAfterSelection={(selectedItem, index) => {
                    return selectedItem;
                }}
                rowTextForSelection={(item, index) => {
                    return item;
                }}
                buttonStyle={styles.dropdownField}
                buttonTextStyle={styles.dropdownFieldText}
                renderDropdownIcon={() => {
                    return (
                        <ListItem
                            imageSrc={require("../../assets/Icon/down-chevron.png")}
                            imageSize={20}
                            style={{ marginRight: -10, marginTop: 2 }}
                        />
                    );
                }}
                dropdownIconPosition={"right"}
                dropdownStyle={styles.dropdownList}
                rowStyle={styles.dropdownListRow}
                rowTextStyle={styles.dropdownListRowText}
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
        backgroundColor: "#f4f4f4",
    },
    label: {
        fontSize: 15,
        paddingLeft: 2,
        marginBottom: 5,
        height: 25,
        color: "black",
    },
    dropdownField: {
        width: "100%",
        borderRadius: 8,
        height: 40,
        backgroundColor: "#fff",
        borderRadius: 5,
        padding: 10,
    },
    dropdownFieldText: { textAlign: "left", fontSize: 15, },
    dropdownList: { backgroundColor: "#EFEFEF", marginTop: -25 },
    dropdownListRowText: { color: "#444", textAlign: "left", fontSize: 18 },
});
