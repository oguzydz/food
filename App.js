import React, { Component } from 'react';

// Redux & Store
import store from './src/store';
import { Provider } from 'react-redux';

import CheckAuth from './src/components/checkAuth';


export default class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <CheckAuth />
      </Provider>
    )
  };
}

