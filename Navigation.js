import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
    import { NavigationContainer } from '@react-navigation/native'


import Registrarse0 from './src/Registrarse0'

const Tab = createBottomTabNavigator()

function MyTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Registrarse0" component={Registrarse0} />
        </Tab.Navigator>
    )
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    )
}
    