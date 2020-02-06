import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';


const TOPHEIGHT = Constants.statusBarHeight;

export default function Header() {
    return (
        <View style={styles.container}>
            <Text style={styles.logo}>Food</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#7fbf35',
        alignItems: 'center',
        justifyContent: 'center',
        height: 75,
        paddingTop: TOPHEIGHT,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
        zIndex: 2,
        elevation: 1,
    },
    logo: {
        color: "#fff",
        fontSize: 25,
        fontWeight: "bold"
    }
});
