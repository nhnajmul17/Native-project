import React from "react";
import { View, StyleSheet } from "react-native";
import Button from "../ToolsComponents/Button";
import InputBox from "../ToolsComponents/InputBox";

export default function AddInvestment(props) {
    return (

        <View style={styles.container}>
            <InputBox text={"Sector"} />
            <InputBox text={"Invested Amount"} />
            <InputBox text={"Returned Amount"} />

            <Button onPress={() => alert('Investment Added')} name={"Save"} />
        </View>


    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 5,
    }
});

