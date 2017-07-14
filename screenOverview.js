import React from 'react';
import { Text, View, Button } from 'react-native';
import { connect } from 'react-redux'

class Overview extends React.Component {
    static navigationOptions = {
        drawer: () => ({
            label: 'My Overview',
        })
    }
    render() {
        return (
            <View>
                <Text>Something special</Text>
                <Button onPress={() => this.props.navigation.navigate('DrawerOpen')} title="Menu" />
                <Button onPress={() => this.props.logout()} title="Logout" />
            </View>
        );
    }
}

function bindActions(dispatch) {
    return {
        logout: () => dispatch({type:'LOGOUT'}),
    }
}

const mapStateToProps = state => ({})

export default connect(mapStateToProps, bindActions)(Overview)