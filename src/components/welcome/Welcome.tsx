import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Welcome = () => {
  const navigator = useNavigation();
  const signupBtn = () => {
    console.log("signup clicked")
    navigator.navigate("Signup")
  }
  const loginBtn = () => {
    console.log("login clicked")
    navigator.navigate("Login")
  }
  return (
    <View>
      <Pressable onPress={signupBtn} >
        <Text>Click here to Signup</Text>
      </Pressable>
      <Pressable onPress={loginBtn} >
        <Text>Click here to Login</Text>
      </Pressable>
    </View>
  )
}

export default Welcome