import { StyleSheet, Text, View, TouchableOpacity, Image, Linking, Alert, Platform } from 'react-native'
import { useState } from 'react'

import { useNavigation } from '@react-navigation/native'

import { DatabaseConnection } from '../connection/connection'

const db = DatabaseConnection.getConnection()

const Footer = ({ url, data }) => {

  const navigation = useNavigation()

  const addJob = ()=>{
    console.log('Clicked..');
    db.transaction(tx => {
        tx.executeSql(
            'INSERT INTO Jobs(employer_logo, job_title, employer_name, job_country)VALUES(?, ?, ?, ?)',
            [data.employer_logo, data.job_title, data.employer_name, data.job_country],
            (tx, results) => {
              console.log('Job Added')
              Alert.alert('Job Saved..', data.job_title, [
                {text: 'OK', onPress: () => console.log('OK Pressed')}
            ])
              navigation.navigate('Home')
            }
        )
    })
}

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.likeBtn} onPress={addJob}>
        <Image
          source={require('../assets/heart.png')}
          resizeMode='contain'
          style={styles.likeBtnImage}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.applyBtn}
        onPress={() => Linking.openURL(url)}      
      >
        <Text style={styles.applyBtnText}>Apply for job</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Footer

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        padding: 8,
        backgroundColor: "#FFF",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
      },     
      likeBtn: {
        width: 55,
        height: 55,
        borderWidth: 1,
        borderColor: "#6F42F0",
        borderRadius: 12,
        justifyContent: "center",
        alignItems: "center",
      },
      likeBtnImage: {
        width: "40%",
        height: "40%",
        tintColor: "#6F42F0",
      },
      applyBtn: {
        flex: 1,
        backgroundColor: "#6F42F0",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 12,
        borderRadius: 12,
      },
      applyBtnText: {
        fontSize: 20,
        color: 'white',
        fontFamily: Platform.OS === 'android' ? 'Roboto' : null,
      },
})