import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MenuProvider } from 'react-native-popup-menu';
import AdminHome from './Components/AdminHomeScreen/AdminHome';

export default function App() {
  return (
    <View style={styles.container}>
      <MenuProvider>
        <AdminHome></AdminHome>
      </MenuProvider>
      <StatusBar style="auto" />
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
