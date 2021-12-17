import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import Icon from './Icon';

export default function ListButton({ text, onEdit, onDelete }) {
    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}> {text} </Text>


            <View style={styles.buttons}>
                <TouchableOpacity onPress={onEdit}>
                    <Icon image={require("../../assets/Icon/edit.png")} size={25} />
                </TouchableOpacity>

                {onDelete &&
                    <TouchableOpacity onPress={onDelete}>
                        <Icon image={require("../../assets/Icon/trash.png")} size={25} />
                    </TouchableOpacity>}

            </View>

        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f4f4f4",
        marginVertical: 5,
        paddingLeft: 10,
        paddingVertical: 5,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    textStyle: {
        flex: 1,
        fontSize: 15,
    },
    buttons: {
        flexDirection: 'row',
    }
})