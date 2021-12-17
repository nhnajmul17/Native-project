import React, { useState } from 'react'
import { View, Text, StyleSheet, Pressable, Keyboard } from 'react-native'
import Button from '../ToolsComponents/Button'
import DropDown from '../ToolsComponents/DropDown'
import Icon from '../ToolsComponents/Icon'
import InputBox from '../ToolsComponents/InputBox'

const persons = ["Martin", "Alex", "Hunter", "Anderson"]
export default function Deposit(props) {
    const [depositor, setDepositor] = useState('');
    const [collector, setCollector] = useState('');
    const [depositedAmount, setDepositedAmount] = useState(40000)
    const [newAmount, setnewAmount] = useState()

    const newamount = (type) => {
        setnewAmount(type)
    }

    const Depositor = (selectItem) => {
        setDepositor(selectItem);
    };
    const Collector = (selectItem) => {
        setCollector(selectItem);
    };

    const addedDeposit = () => {
        Keyboard.dismiss();
        const total = parseInt(depositedAmount) + parseInt(newAmount);
        setDepositedAmount(total);

    };

    return (
        <View style={styles.container}>
            <DropDown dataArray={persons} text={'Depositor'} onSelect={Depositor} />
            <InputBox text={"Amount"} onChangeText={newamount} />
            <DropDown dataArray={persons} text={'Collector'} onSelect={Collector} />

            <Button onPress={addedDeposit} name={"Save"}></Button>
            <Text style={styles.depositText}>Deposited Amount: {'$' + depositedAmount}</Text>

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
    depositText: {
        fontSize: 20,
        paddingLeft: 5,
        marginTop: 20,
        marginLeft: 20,
        height: 25,
        color: "black",
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

