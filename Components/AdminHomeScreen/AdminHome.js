import React from 'react'
import { View, StyleSheet, ImageBackground, TouchableOpacity, Pressable, } from 'react-native'
import Icon from '../ToolsComponents/Icon'
import ListItem from '../ToolsComponents/ListItem'
import ValueLabel from '../ToolsComponents/ValueLabel'


import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,

} from "react-native-popup-menu";

const Context = React.createContext();



export default function AdminHome({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.headerSection}>
                <ImageBackground
                    style={styles.banner}
                    source={require("../../assets/headerBanner.png")}
                    resizeMode="contain"
                    imageStyle={{ opacity: 0.3 }}
                >
                    <View style={styles.profileContainer}>
                        <ListItem
                            imageSrc={require("../../assets/Icon/admin.png")}
                            imageSize={50}
                            text={"User"}
                            textStyle={{ color: '#000', marginLeft: -10 }}
                        />
                    </View>

                    <View style={styles.detailsContainer}>
                        <ValueLabel
                            text={"Total Balance"}
                            value={10000}
                            fontSize={12}
                            fontColor={"green"}
                        />
                        <ValueLabel
                            text={"Asset"}
                            value={6000}
                            fontSize={12}
                            fontColor={"green"}
                        />
                        <ValueLabel
                            text={"Investment"}
                            value={4000}
                            fontSize={12}
                            fontColor={"green"}
                        />
                    </View>
                </ImageBackground>
            </View>

            <View style={styles.iconSection}>
                <Menu>
                    <MenuTrigger>
                        <Icon
                            title="Statement"
                            image={require("../../assets/Icon/statement.png")}
                            size={60}
                            backgroundColor="#9cf0f0"

                        />
                    </MenuTrigger>

                    <MenuOptions>
                        <MenuOption
                            onSelect={() => navigation.navigate("SummaryStatement")}
                        >
                            <ListItem
                                imageSrc={require("../../assets/Icon/summaryStatement.png")}
                                imageSize={30}
                                text={"Summary Statement"}
                                textStyle={{ marginLeft: -10 }}
                            />
                        </MenuOption>
                        <MenuOption onSelect={() => navigation.navigate("IndividualStatement")}>
                            <ListItem
                                imageSrc={require("../../assets/Icon/individualStatement.png")}
                                imageSize={30}
                                text={"Individual Statement"}
                                textStyle={{ marginLeft: -10 }}
                            />
                        </MenuOption>
                        <MenuOption onSelect={() => alert('Touched')}>
                            <ListItem
                                imageSrc={require("../../assets/Icon/overallStatement.png")}
                                imageSize={30}
                                text={"Overall Statement"}
                                textStyle={{ marginLeft: -10 }}
                            />
                        </MenuOption>
                    </MenuOptions>
                </Menu>

                <TouchableOpacity onPress={() => navigation.push("Deposit")}>
                    <Icon
                        title="Deposit"
                        image={require("../../assets/Icon/deposit.png")}
                        size={60}
                        backgroundColor="#9cf0f0"
                    />
                </TouchableOpacity>

                <Menu>
                    <MenuTrigger>
                        <Icon
                            title="Investment"
                            image={require("../../assets/Icon/investment.png")}
                            size={60}
                            backgroundColor="#9cf0f0"
                        />
                    </MenuTrigger>

                    <MenuOptions>
                        <MenuOption onSelect={() => navigation.navigate("AddInvestment")}>
                            <ListItem
                                imageSrc={require("../../assets/Icon/add.png")}
                                imageSize={30}
                                text={"Add Investment"}
                                textStyle={{ marginLeft: -10 }}
                            />
                        </MenuOption>
                        <MenuOption onSelect={() => alert("Update Investment")}>
                            <ListItem
                                imageSrc={require("../../assets/Icon/edit.png")}
                                imageSize={30}
                                text={"Update Investment"}
                                textStyle={{ marginLeft: -10 }}
                            />
                        </MenuOption>
                    </MenuOptions>
                </Menu>

                <Menu>
                    <MenuTrigger>
                        <Icon
                            title="Asset"
                            image={require("../../assets/Icon/asset.png")}
                            size={60}
                            backgroundColor="#9cf0f0"

                        />
                    </MenuTrigger>

                    <MenuOptions>
                        <MenuOption onSelect={() => navigation.navigate("AddAsset")}>
                            <ListItem
                                imageSrc={require("../../assets/Icon/add.png")}
                                imageSize={30}
                                text={"Add Asset"}
                                textStyle={{ marginLeft: -10 }}
                            />
                        </MenuOption>
                        <MenuOption onSelect={() => navigation.navigate("CreateAssetType")}>
                            <ListItem
                                imageSrc={require("../../assets/Icon/create1.png")}
                                imageSize={30}
                                text={"Create Asset Type"}
                                textStyle={{ marginLeft: -10 }}
                            />
                        </MenuOption>
                        <MenuOption onSelect={() => navigation.navigate("CreateAssetHolder")}>
                            <ListItem
                                imageSrc={require("../../assets/Icon/create.png")}
                                imageSize={30}
                                text={"Create Asset Holder"}
                                textStyle={{ marginLeft: -10 }}
                            />
                        </MenuOption>

                    </MenuOptions>
                </Menu>

                <Menu>
                    <MenuTrigger>
                        <Icon
                            title="Iron Bank"
                            image={require("../../assets/Icon/bank.png")}
                            size={60}
                            backgroundColor="#9cf0f0"

                        />
                    </MenuTrigger>

                    <MenuOptions>
                        <MenuOption onSelect={() => navigation.navigate("Add Loan Info")}>
                            <ListItem
                                imageSrc={require("../../assets/Icon/add.png")}
                                imageSize={30}
                                text={"Add Loan Info"}
                                textStyle={{ marginLeft: -10 }}
                            />
                        </MenuOption>
                        <MenuOption onSelect={() => alert(`Touched`)}>
                            <ListItem
                                imageSrc={require("../../assets/Icon/edit.png")}
                                imageSize={30}
                                text={"Update Loan Info"}
                                textStyle={{ marginLeft: -10 }}
                            />
                        </MenuOption>
                    </MenuOptions>
                </Menu>

                <Menu>
                    <MenuTrigger>
                        <Icon
                            title="Settlement"
                            image={require("../../assets/Icon/transfer.png")}
                            size={60}
                            backgroundColor="#9cf0f0"

                        />
                    </MenuTrigger>

                    <MenuOptions>
                        <MenuOption onSelect={() => alert(`Touched`)}>
                            <ListItem
                                imageSrc={require("../../assets/Icon/transferAsset.png")}
                                imageSize={30}
                                text={"Transfer Asset"}
                                textStyle={{ marginLeft: -10 }}
                            />
                        </MenuOption>
                    </MenuOptions>
                </Menu>

                <Menu>
                    <MenuTrigger>
                        <Icon
                            title="Members"
                            image={require("../../assets/Icon/member.png")}
                            size={60}
                            backgroundColor="#9cf0f0"
                        />
                    </MenuTrigger>

                    <MenuOptions>
                        <MenuOption onSelect={() => alert(`Touched`)}>
                            <ListItem
                                imageSrc={require("../../assets/Icon/player-1.png")}
                                imageSize={30}
                                text={"Alex"}
                                textStyle={{ marginLeft: -10 }}
                            />
                            <ListItem
                                imageSrc={require("../../assets/Icon/player-2.png")}
                                imageSize={30}
                                text={"Hunter"}
                                textStyle={{ marginLeft: -10 }}
                            />
                            <ListItem
                                imageSrc={require("../../assets/Icon/player-3.png")}
                                imageSize={30}
                                text={"Anderson"}
                                textStyle={{ marginLeft: -10 }}
                            />
                            <ListItem
                                imageSrc={require("../../assets/Icon/player-4.png")}
                                imageSize={30}
                                text={"Martin"}
                                textStyle={{ marginLeft: -10 }}
                            />
                        </MenuOption>
                    </MenuOptions>
                </Menu>

                <TouchableOpacity onPress={() => alert("Touched The item")}>
                    <Icon
                        title="Information"
                        image={require("../../assets/Icon/information.png")}
                        size={60}
                        backgroundColor="#9cf0f0"
                    />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('About')}>
                    <Icon
                        title="About"
                        image={require("../../assets/Icon/rules.png")}
                        size={60}
                        backgroundColor="#9cf0f0"
                    />
                </TouchableOpacity>
            </View>


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
        </View >
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