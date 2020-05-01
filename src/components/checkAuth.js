import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

// Components
import Header from './header';
import List from './list';
import Calculator from './calculator';
import { data } from './products';

// Sign Panel
import Sign from './sign';

// Redux
import { connect } from 'react-redux';


class CheckAuth extends Component {

    render() {
        return (
            <View style={styles.container} >
                {this.props.auth === false ?
                    <Sign />
                    :
                    <View>
                        <Header />
                        <List
                            data={data}
                        />
                        <Calculator />
                    </View>
                }
            </View>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        auth: state.auth.auth
    }
}

export default connect(mapStateToProps, null)(CheckAuth);

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#7fbf35"
    }
  })