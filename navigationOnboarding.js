import { StackNavigator } from 'react-navigation';

import Register from './screenRegister'
import Login from './screenLogin'
import PwdForget from './screenPwdforget'
import Tour from './screenTour'
import Splash from './splash'

const OnboardingNavigator = StackNavigator({
    Splash: { screen: Splash},
    Login: { screen: Login },
    Register: { screen: Register },
    PwdForgot: { screen: PwdForget },
    Tour: { screen: Tour },
}, {
    initialRouteName: 'Splash'
})

export default OnboardingNavigator