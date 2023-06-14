import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { auth } from '../firebase'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {

    const navigation = useNavigation()

    const handleSignout = () =>{
        auth
        .signOut()
        .then(() =>{
            navigation.replace("Login")
        })
    }

  return (
    <View style={styles.container}>
        <Text>Email: { auth.currentUser?.email }</Text>
        <TouchableOpacity style={styles.button} onPress={handleSignout}>
        <Text style={styles.buttonText}>Sign Out</Text>
        </TouchableOpacity>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})