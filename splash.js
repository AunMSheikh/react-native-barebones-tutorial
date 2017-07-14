import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import { NavigationActions } from 'react-navigation';

class Splash extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAppLoaded: false,
        }
    }
    static navigationOptions = {
        header: null,
    }
    componentDidMount() {
        setTimeout(() => {
          this.setStateValue()
        }, 1000);
        
    }
    setStateValue = () => {
        this.setState({ isAppLoaded: true })
    }
    componentDidUpdate() {
        if(this.state.isAppLoaded){
            this._navigateTo('Login')
        }
    }
    _navigateTo = (routeName) => {
        const actionToDispatch = NavigationActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName })]
        })
        this.props.navigation.dispatch(actionToDispatch)
    }
    render() {
        return (
            <View><Text>This is a splash screen view</Text></View>
        )
    }
}


const mapStateToProps = state => ({})
export default connect(mapStateToProps, this._navigateTo)(Splash);

