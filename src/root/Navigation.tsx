import React from 'react'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import Login from "../components/login/Login"
import Signup from "../components/signup/Signup"
import Welcome from "../components/welcome/Welcome"

const Navigation = () => {
    const Stack = createStackNavigator();
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen component={Login} name="Login" />
        <Stack.Screen component={Signup} name="Signup" />
        <Stack.Screen component={Welcome} name="Welcome" />
    </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation;