import React, { useState, Component } from 'react';
import { View, StyleSheet } from 'react-native'

import store from './src/store';
import { Provider } from 'react-redux';

import Constants from 'expo-constants';

import Header from './src/components/header';
import List from './src/components/list';
import Calculator from './src/components/calculator';

import {data} from './src/components/products';

// const DATA = [
//   {
//     id: 1,
//     title: "Simit",
//     price: 2,
//     img: require("./src/images/simit.jpg")
//   },
//   {
//     id: 2,
//     title: "Ezine Peyniri",
//     price: 1.75,
//     img: { uri: "https://reimg-carrefour.mncdn.com/mnresize/600/600/productimage/30084518/30084518_0_MC/8796845670450_1528879596665.jpg" }

//   }
// ]


export default class App extends Component {



  render() {
    return (
      <Provider store={store}>
        <View style={styles.container} >
          <Header />
          <List
            data={data}
          />
          <Calculator/>
        </View>
      </Provider>
    )
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7fbf35"
  }
})