import React, { useState, useEffect, Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { connect } from 'react-redux';
import * as Actions from '../store/actions/counterActions';

const WIDTH = Dimensions.get("window").width;
const isSmallDevice = WIDTH <= 414;
const noPadding = WIDTH - (isSmallDevice ? 90 : 100);
const numColumns = isSmallDevice ? 3 : 4;
const boxWidth = noPadding / numColumns

let itemId = null;

class Item extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cart: this.props.cart
        }
    }

    state = {
        isSelected: false,
        isClicked: false,
    }


    add_cart = (product) => {
        this.props.add_cart(product);
        this.props.add_price(product.price);
    }

    remove_cart = (product) => {
        this.props.remove_cart(product);
        this.props.remove_price(product.price);
    }

    render() {
        const { item, adet } = this.props;

        return (
            <View style={styles.box}>
                <TouchableOpacity style={[styles.addButton, { borderBottomLeftRadius: this.props.cart[adet].length >= 1 ? 0 : 5, borderBottomEndRadius: this.props.cart[adet].length >= 1 ? 0 : 5 }]}
                    onPress={() => this.add_cart(item)}
                >
                    <Text style={[styles.addIcon]}>
                        <Ionicons name="md-add" size={16} color={"#334c15"} />
                    </Text>
                </TouchableOpacity>
                {
                    this.props.cart[adet].length >= 1 ?
                        <View style={styles.productLength}>
                            <Text style={{ color: "#fff", fontSize: 14, textAlign: "center" }}>{this.props.cart[adet].length}</Text>
                        </View> : null}

                {
                    this.props.cart[adet].length >= 1 ?
                        <TouchableOpacity style={styles.removeButton}
                            onPress={() => this.remove_cart(item)}
                        >
                            <Text style={styles.addIcon}>
                                <Ionicons name="md-remove" size={20} color={"#334c15"} />
                            </Text>
                        </TouchableOpacity> : null
                }


                <View style={[styles.boxTop, { borderColor: this.props.cart[adet].length >= 1 ? "#64962a" : "#fff" }]}>
                    <Image
                        style={{ width: "100%", height: "100%", position: "relative" }}
                        source={item.img}
                    />
                </View>
                <Text style={styles.boxPrice}>₺{item.price.toFixed(2)}</Text>
                <Text style={styles.boxTitle}>{item.title}</Text>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    box: {
        width: boxWidth,
        height: boxWidth * 2,
        marginRight: 20,
        marginBottom: 10,
        paddingTop: 13,
        marginTop: 10,
    },
    boxTop: {
        width: boxWidth,
        height: boxWidth * 1.1,
        borderRadius: 15,
        padding: 6,
        backgroundColor: "#fff",
        borderColor: "#64962a",
        borderWidth: 1,

    },
    boxPrice: {
        fontWeight: "bold",
        color: "white",
        fontSize: 17,
        marginTop: 5
    },
    boxTitle: {
        color: "#334d15",
        fontSize: 15,
        marginTop: 0
    },
    addButton: {
        width: 30,
        height: 30,
        top: 2,
        position: "absolute",
        right: -8,
        backgroundColor: "white",
        paddingBottom: 6,
        paddingTop: 6,
        zIndex: 1,
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
        elevation: 1,

    },

    productLength: {
        width: 30,
        height: 30,
        position: "absolute",
        right: -8,
        backgroundColor: "#334d15",
        top: 29,
        paddingBottom: 6,
        paddingTop: 6,
        zIndex: 1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
        elevation: 1,
    },

    addIcon: {
        flex: 1,
        textAlign: "center",
    },
    removeButton: {
        width: 30,
        height: 30,
        top: 59,
        position: "absolute",
        right: -8,
        backgroundColor: "white",
        paddingBottom: 6,
        paddingTop: 6,
        zIndex: 1,
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
        elevation: 1,
        borderTopLeftRadius: 0,
        borderTopEndRadius: 0
    },


})

const mapStateToProps = (state) => {
    return {
        price: state.counter.price,
        cart: state.cart.cart,
        selects: state.cart.selects
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        add_price: (price) => dispatch(Actions.add_price(price)),
        remove_price: (price) => dispatch(Actions.remove_price(price)),
        add_cart: (product) => dispatch(Actions.add_cart(product)),
        remove_cart: (product) => dispatch(Actions.remove_cart(product)),
     }
}

export default connect(mapStateToProps, mapDispatchToProps)(Item); 