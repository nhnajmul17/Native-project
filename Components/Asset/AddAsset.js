import React, { useState } from "react";
import { View, StyleSheet, Pressable } from "react-native";

import InputBox from "../ToolsComponents/InputBox";
import DropDown from "../ToolsComponents/DropDown";
import Button from "../ToolsComponents/Button";
import Icon from "../ToolsComponents/Icon";

const assetType = ["Cash", "Prize Bond", "Bank Account", "Sanchaypatro"];
const assetHolder = ["Alex", "Hunter", "Martin", "Anderson"];



export default function AddAsset(props) {

    const [collector, setCollector] = useState('');
    const [depositor, setDepositor] = useState('');


    const Depositor = (selectItem) => {
        setDepositor(selectItem);
    };
    const Collector = (selectItem) => {
        setCollector(selectItem);
    };

    const reset = (selectItem) => {
        setDepositor(selectItem);
    }
    return (

        <View style={styles.container}>
            <DropDown dataArray={assetType} text={'Asset Type'} onSelect={Depositor} />
            <DropDown dataArray={assetHolder} text={'Asset Holder'} onSelect={Collector} />
            <InputBox text={"Amount"} />
            <Button onSelect={reset} name={"Save"} />
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
        paddingTop: 20,
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


