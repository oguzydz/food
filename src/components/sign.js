import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image, ActivityIndicator } from 'react-native'

import * as Google from 'expo-google-app-auth';

import * as Actions from './../store/actions/authActions';
import { connect } from 'react-redux';

import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDWGSstZcJqGz7LeUBoD0SNIElEJoLt_IU",
    authDomain: "fooddd-158d3.firebaseapp.com",
    databaseURL: "https://fooddd-158d3.firebaseio.com",
    projectId: "fooddd-158d3",
    storageBucket: "fooddd-158d3.appspot.com",
    messagingSenderId: "496917328200",
    appId: "1:496917328200:web:334aa46b1806b76458037d",
    measurementId: "G-6NZ4LX5551"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

class Sign extends Component {


    checkifLogged = () => {
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                this.props.login(user);
            }
        })
    }


    state = {
        loading: false
    }

    signIn = async () => {
        this.setState({ loading: true })
        try {
            const result = await Google.logInAsync({
                iosClientId: '496917328200-endoqldkaor9fmmqggornndu7sj3il3f.apps.googleusercontent.com',
                scopes: ['profile', 'email'],
            });
             
            
            if (result.type === "success") {
                this.setState({ loading: false })
                this.props.login(result.user);
            }

        } catch (e) {
            return { error: true };
        }

        // console.log(this.props.state.auth)

    }


    componentDidMount = () => {
        this.checkifLogged();
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{ flex: 3, justifyContent: "flex-end", alignItems: "center" }}>
                    <Text style={styles.logo}>Food</Text>
                </View>

                <View style={{ flex: 5 }}>
                    

                    {this.state.loading === true ?
                        <ActivityIndicator
                            color="white"
                            size="large"
                        /> : <View>
                        <TouchableOpacity onPress={() => this.signIn()} style={styles.button}>
                            <Image
                                source={require('../images/googleLogo.png')}
                                style={{ width: 32, height: 32, marginRight: 22 }}
                            />
                            <Text style={{ fontSize: 20, color: "#4285F4", fontWeight: "bold" }}>Google ile Giriş Yap!</Text>
                        </TouchableOpacity>
                    </View>
                    }

                </View>
            </View>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        login: (user) => { dispatch(Actions.signin(user)) }
    }
}

const mapStateToProps = (state) => {
    return {
        state: state
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Sign);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    },
    logo: {
        color: "#fff",
        fontSize: 35,
        fontWeight: "bold",
        padding: 20
    },
    button: {
        backgroundColor: "white",
        padding: 20,
        margin: 40,
        marginTop: 0,
        alignItems: "center",
        borderRadius: 50,
        flexDirection: "row"
    }
});