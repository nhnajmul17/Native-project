// import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { MenuProvider } from 'react-native-popup-menu';
import AdminHome from './Components/AdminHomeScreen/AdminHome';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';
import { createStackNavigator } from '@react-navigation/stack';
import Navigation from './Components/Navigation/Navigation';
import Deposit from './Components/Deposit/Deposit';
import AddInvestment from './Components/AddInvestment/AddInvestment';
const Stack = createStackNavigator();


export default function App() {
  return (
    /*  <SafeAreaProvider>
       <SafeAreaView style={{ flex: 1 }}>
         <View style={styles.container}> */
    <NavigationContainer>
      <MenuProvider>

        <Stack.Navigator>
          <Stack.Screen name="Home" component={AdminHome} options={{ headerShown: false }} />
          <Stack.Screen name="Deposit" component={Deposit} />
          <Stack.Screen name="AddInvestment" component={AddInvestment} />

        </Stack.Navigator>
      </MenuProvider>

    </NavigationContainer>

    // <StatusBar style="auto" />

    /*         </View>
          </SafeAreaView>
        </SafeAreaProvider> */

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
