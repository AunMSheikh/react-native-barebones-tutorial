import React from 'react'
import { Text, View, Button } from 'react-native'
import { connect } from 'react-redux'

class Login extends React.Component {
    render() {
        return (
            <View>
                <Text>Name, Password</Text>
                <Button onPress={() => this.props.login()} title="Login" />
                <Button onPress={() => this.props.navigation.navigate('Register')} title="Register" />
                <Button onPress={() => this.props.navigation.navigate('PwdForgot')} title="Forget Password" />
                <Button onPress={() => this.props.navigation.navigate('Tour')} title="Tour" />
            </View>
        )
    }
}

function bindActions(dispatch) {
    return {
        login: () => dispatch({type:'LOGIN'}),
    }
}
const mapStateToProps = state => ({})

export default connect(mapStateToProps, bindActions)(Login)