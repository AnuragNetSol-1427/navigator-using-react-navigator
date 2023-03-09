import React, { useState } from 'react'
import { View, Text, StyleSheet, Pressable, TextInput, ToastAndroid } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

const AsyncStoorage = () => {
  const [email, setEmail] = useState('');
  const [inputValue, setInputValue] = useState();
  const handleEmail = (val) => {
    setEmail(val)
    console.log(val)
  }
  const resetEmail = () => {
    setInputValue('')
    setEmail('')
  }
  const saveEmail = async () => {
    await AsyncStorage.setItem('email', email)
    ToastAndroid.show("Email saved", ToastAndroid.SHORT)
  }
  const showSavedData = async () => {
    let emailShow = await AsyncStorage.getItem('email')
    ToastAndroid.show(emailShow, ToastAndroid.SHORT)
  }
  return (
    <View>
      <TextInput placeholder='Enter your email' style={styles.textInput} onChangeText={handleEmail} value={inputValue}></TextInput>
      <Pressable style={styles.btn} onPress={saveEmail}>
        <Text style={styles.btnText}>Save the data</Text>
      </Pressable>
      <Pressable style={styles.btn} onPress={showSavedData}>
        <Text style={styles.btnText}>Show the saved data</Text>
      </Pressable>
      <Pressable style={styles.btn} onPress={resetEmail}>
        <Text style={styles.btnText}>Reset the Text Input</Text>
      </Pressable>
      <Text>{email}</Text>
    </View>
  )
}

export default AsyncStoorage

const styles = StyleSheet.create({
  textInput: {
    borderColor: 'black',
    borderWidth: 1,
  },
  btn: {
    backgroundColor: '#93b9e3',
    padding: 15,
    margin: 15,
  },
  btnText: {
    textAlign: 'center',
    color: '#fff',
  },
});