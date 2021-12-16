import React from 'react'

import AdminHome from '../AdminHomeScreen/AdminHome';
import Deposit from '../Deposit/Deposit';
import { View, StyleSheet } from 'react-native-web';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


export default function Navigation() {
    return (
        <View style={styles.container}>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={AdminHome} />
                <Stack.Screen name="Deposit" component={Deposit} />
            </Stack.Navigator>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
