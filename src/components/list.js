import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions, Button } from 'react-native';
import Item from '../components/item';

import { connect } from 'react-redux';
import * as Actions from '../store/actions/counterActions';

// screen sizing
const { width, height } = Dimensions.get('window');
// orientation must fixed
const SCREEN_WIDTH = width < height ? width : height;
const SCREEN_HEIGHT = height;
// const SCREEN_HEIGHT = width < height ? height : width;
const isSmallDevice = SCREEN_WIDTH <= 414;
const numColumns = isSmallDevice ? 3 : 4;



class List extends Component {


    _renderItem(item, index) {
        // console.log(this.props)

        return (<Item
            item={item}
            adet={index}
        />
        )
    }


    render() {
        const { data } = this.props;
        // console.klog(this.props.cart.cart[0])
        return (
            <View style={styles.container}>
                <FlatList
                    data={data}
                    numColumns={numColumns}
                    renderItem={({ item, index }) => this._renderItem(item, index)}
                    keyExtractor={item => item.id}
                />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingTop: 0,
        paddingBottom: 30,
        height: SCREEN_HEIGHT - 110
    },
    list: {
        alignItems: "baseline"
    }
})

const mapStateToProps = (state) => {
    return {
        cart: state.cart.cart
    }
}

export default connect(mapStateToProps)(List); 