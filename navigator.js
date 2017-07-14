import React, { Component } from 'react'
import { connect } from 'react-redux'
import OnboardingNavigator from './navigationOnboarding'
import MainNavigator from './navigationMain'

class Navigator extends Component {
    render() {
        return this.props.login ? <MainNavigator/> : <OnboardingNavigator/>
    }
}
        
const mapStateToProps = state => ({ login: state })

export default connect(mapStateToProps, {})(Navigator)