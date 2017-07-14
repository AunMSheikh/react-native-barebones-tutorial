import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import AppReducer from './app/reducers/index';
import Navigator from './app/routes/AppNavigator';


//create store
const store = createStore(AppReducer)

export default class OnTheSpotRx extends Component {
  constructor() {
    super();
    this.state = { store }
  }
  
  render() {
    return (
      <Provider store={this.state.store}>
        <Navigator />
      </Provider>
    )
  }
}

AppRegistry.registerComponent('OnTheSpotRx', () => OnTheSpotRx);































/*import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  AppRegistry,
} from 'react-native';

import {StackNavigator, NavigationActions} from 'react-navigation';


import SplashScreen from  './app/layouts/splashScreen/splash.js';
import WelcomeScreen from './app/routes/welcome';

class OnTheSpotRx extends Component {
  constructor(props){
    super(props);
    this.state = {
      isAppReady: false,
    }
  }
  static navigationOptions = {
    header: null,
  }
  componentDidMount() {
    setTimeout(() => {this.setState({isAppReady: true})}, 1000)
  }
  componentDidUpdate() {
    if(this.state.isAppReady){
      this.props.navigation.navigate('Welcome')
    } 
  }

  render() {
    return(
      <SplashScreen />
    )
  }
}

const SplashNavigator = StackNavigator({
    Home: {screen: OnTheSpotRx},
    Welcome: {screen: WelcomeScreen}
});

AppRegistry.registerComponent('OnTheSpotRx', () => SplashNavigator);
*/