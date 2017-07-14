import { DrawerNavigator } from 'react-navigation'

import Overview from './screenOverview'
import Profile from './screenProfile'
import Settings from './screenSettings'

const MainNavigator = DrawerNavigator({
    Overview: { screen: Overview },
    Profile: { screen: Profile },
    Settings: { screen: Settings },
}, {
    initialRouteName: 'Overview',
})

export default MainNavigator