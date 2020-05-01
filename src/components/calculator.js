import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { connect } from 'react-redux'
import * as Actions from '../store/actions/counterActions';


const WIDTH = Dimensions.get("window").width;


function Calculator(props) {
    return (
        <View style={styles.container}>
            <View style={styles.price}>
                <View style={styles.iconView}>
                    <Text style={styles.iconText}>
                        <Ionicons name="md-basket" size={23} color={"#334c15"} />
                    </Text>
                </View>
                <Text style={styles.priceText}>
                    ₺{props.price.toFixed(2)}
                </Text>
            </View>

            <TouchableOpacity style={styles.button}
                onPress={() => {
                    props.reset_price()
                    props.remove_cart_lenght()
                }}
            >
                <Text style={styles.buttonText}>
                    <Ionicons name="md-flame" size={23} color={"#fff"} />
                </Text>
            </TouchableOpacity>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        height: WIDTH >= 400 ? 80 : 65,
        backgroundColor: "#9ccf63",
        shadowColor: "#64962a",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.15,
        shadowRadius: 3.84,
        elevation: 5,
        position: "absolute",
        bottom: 0,
        width: WIDTH,
        marginBottom: -35
    },
    button: {
        flex: 1,
        margin: 10,
        backgroundColor: "#bf3535",
        borderRadius: 5,
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 0,
        shadowColor: "#64962a",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3.84,
        elevation: 5,
    },
    buttonText: {
        flex: 1,
        textAlign: "center",
    },
    price: {
        flex: 2,
        margin: 10,
        backgroundColor: "white",
        borderRadius: 5,
        flexDirection: "row",
        alignItems: "center",
        shadowColor: "#64962a",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.5,
        shadowRadius: 1.2,
        elevation: 5,
    },
    priceText: {
        flex: 1,
        fontSize: 20,
        textAlign: "left",
        marginLeft: 10
    },
    iconView: {
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        backgroundColor: "#f7f7f7",
        height: WIDTH >= 400 ? 60 : 40,
        width: WIDTH >= 400 ? 60 : 40,
        alignItems: "center",
        flexDirection: "row",
        // textAlign: "center"
    },
    iconText: {
        textAlign: "center",
        flex: 1
    }
})

const mapStateToProps = (state) => {
    return {
        price: state.counter.price
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        reset_price: () => dispatch(Actions.reset_price()),
        remove_cart_lenght: () => dispatch(Actions.remove_cart_length())

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);