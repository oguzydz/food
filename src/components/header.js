import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

import * as Actions from '../store/actions/authActions';
import { connect } from 'react-redux';

const TOPHEIGHT = Constants.statusBarHeight;

class Header extends Component {


    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.logo}>Food</Text>
                <View style={{ justifyContent: "flex-end", backgroundColor: "red", position: "absolute", right: 10, top: 35, padding: 5, borderRadius: 5 }}>
                    <TouchableOpacity onPress={() => this.props.logout()}>
                        <Text style={{ color: "white" }}>Çıkış Yap</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => { dispatch(Actions.logout()) }
    }
}

const mapStateToProps = (state) => {
    return {
        state: state
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Header);

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
        flexDirection: "row"
    },
    logo: {
        color: "#fff",
        fontSize: 25,
        fontWeight: "bold"
    }
});
