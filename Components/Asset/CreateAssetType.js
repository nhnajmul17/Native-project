import React, { useState } from "react";
import {
    StyleSheet,
    View,
    Text,
    FlatList,
    Keyboard,
} from "react-native";

import Button from "../ToolsComponents/Button";
import InputBox from "../ToolsComponents/InputBox";
import ListButton from "../ToolsComponents/ListButton";

const data = [
    {
        id: 1,
        name: "Money",
    },
    {
        id: 2,
        name: "Check",
    },
];

export default function CreateAssetType(props) {
    const [type, setType] = useState();
    const [id, setId] = useState(2);
    const [assetTypeData, setAssetTypeData] = useState(data);

    const onChangeText = (type) => {
        setType(type);
    };

    const onPress = () => {
        Keyboard.dismiss();
        const name = type;
        setId(id + 1);
        const obj = { name: name, id: id + 1 };
        assetTypeData.push(obj);
    };

    const delet = (id) => {
        const newAssetType = assetTypeData.filter(item => item.id != id);
        setAssetTypeData(newAssetType)
    }
    return (

        <View style={styles.container}>
            <InputBox text={"Type Name"} onChangeText={onChangeText} />
            <Button name={"Save"} onPress={onPress} />

            <View style={styles.listView}>
                <Text style={styles.listTitle}>Asset Type</Text>
                <View style={styles.list}>
                    <FlatList
                        data={assetTypeData}
                        extraData={id}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <ListButton text={item.name} onDelete={() => delet(item.id)} />
                        )}
                    />
                </View>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 5,
    },
    listView: {
        marginTop: 30,
        marginHorizontal: 20,
    },
    listTitle: {
        fontSize: 18,
        padding: 10,
        backgroundColor: "#f4f4f4",
    },
    list: {
        marginTop: 10,
        flexGrow: 1,
    },
});
