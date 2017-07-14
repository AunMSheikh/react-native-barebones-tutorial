import React, { Component } from 'react'
import { Provider } from 'react-redux'
import Navigator from './navigator'
import { createStore } from 'redux';

function loginReducer(state = false, action) {
    switch (action.type) {
        case 'SPLASH': return true
        case 'LOGIN': return false
        case 'LOGOUT': return false
        default: return state
    }
}
const store = createStore(loginReducer, false);

    class Setup extends Component {
        constructor() {
            super()
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

export default Setup