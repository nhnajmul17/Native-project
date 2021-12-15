import React from 'react'
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, } from 'react-native'
import Icon from '../ToolsComponents/Icon'
import ListItem from '../ToolsComponents/ListItem'
import ValueLabel from '../ToolsComponents/ValueLabel'

import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
    MenuProvider,
} from "react-native-popup-menu";

export default function AdminHome() {
    return (
        <View style={styles.container}>
            <View style={styles.headerSection}>
                <ImageBackground
                    style={styles.banner}
                    source={require("../../assets/headerBanner.png")}
                    resizeMode="contain"
                    imageStyle={{ opacity: 0.2 }}
                >
                    <View style={styles.profileContainer}>
                        <ListItem
                            imageSrc={require("../../assets/Icon/admin.png")}
                            imageSize={50}
                            text={"User"}
                            textStyle={{ color: '#fff', marginLeft: -10 }}
                        />
                    </View>

                    <View style={styles.detailsContainer}>
                        <ValueLabel
                            text={"Total"}
                            value={100000}
                            fontSize={12}
                            fontColor={"green"}
                        />
                        <ValueLabel
                            text={"Asset"}
                            value={60000}
                            fontSize={12}
                            fontColor={"green"}
                        />
                        <ValueLabel
                            text={"Investment"}
                            value={40000}
                            fontSize={12}
                            fontColor={"green"}
                        />
                    </View>
                </ImageBackground>
            </View>



        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    headerSection: {
        height: "25%",
        backgroundColor: 'skyblue',
        paddingTop: 20,
    },
    banner: {
        flex: 1,
    },
    profileContainer: {
        marginTop: 3,
        marginLeft: 5,
        height: "20%",
    },
    detailsContainer: {
        height: "80%",
        justifyContent: "center",
        alignItems: "center",
    },
    iconSection: {
        height: "50%",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        alignItems: "center",
        alignContent: "center",
        backgroundColor: "#f4f4f4",
        margin: 10,
        padding: 10,
        borderRadius: 15,
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

const optionsStyles = {
    optionsContainer: {
        width: 250,
    },
    optionWrapper: {
        margin: 2,
        backgroundColor: "#f4f4f4",
    },
};