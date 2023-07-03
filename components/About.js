import { StyleSheet, Text, View, Platform } from 'react-native'
import React from 'react'

const About = ({ info }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headText}>About the job:</Text>

      <View style={styles.contentBox}>
        <Text style={styles.contextText}>{info}</Text>
      </View>
    </View>
  )
}

export default About

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    backgroundColor: "#FFF",
    borderRadius: 16,
    padding: 10,
  },
  headText: {
    fontSize: 22,
    color: 'grey',
    fontFamily: Platform.OS === 'android'? 'Roboto' : null,
  },
  contentBox: {
    marginVertical: 4,
  },
  contextText: {
    fontSize: 18,
    color: 'grey',
    fontFamily: Platform.OS === 'android'? 'Roboto' : null,
    marginVertical: 15,
  },
})