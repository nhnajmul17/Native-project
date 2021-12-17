import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import Button from '../ToolsComponents/Button'
import DropDown from '../ToolsComponents/DropDown'
import Icon from '../ToolsComponents/Icon'
import InputBox from '../ToolsComponents/InputBox'

const persons = ["Martin", "Alex", "Hunter", "Anderson"]
export default function Deposit(props) {
    return (
        <View style={styles.container}>
            <DropDown dataArray={persons} text={'Depositor'} />
            <InputBox text={"Amount"} />
            <DropDown dataArray={persons} text={'Collector'} />

            <Button name={"Save"}></Button>
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

    )
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

