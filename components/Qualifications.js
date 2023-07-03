import { StyleSheet, Text, View, Platform } from 'react-native'
import React from 'react'

const Qualifications = ({ title, points }) => {
  return (
    <View style={styles.container}>
    <Text style={styles.title}>{title}:</Text>

    <View style={styles.pointsContainer}>
      {points.map((item, index) => (
        <View style={styles.pointWrapper} key={item + index}>
          <View style={styles.pointDot} />
          <Text style={styles.pointText}>{item}</Text>
        </View>
      ))}
    </View>
  </View>
  )
}

export default Qualifications

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    backgroundColor: "#FFF",
    borderRadius: 12,
    padding: 10,
  },
  title: {
    fontSize: 24,
    color: 'grey',
    fontFamily: Platform.OS === 'android'? 'Roboto' : null,
  },
  pointsContainer: {
    marginVertical: 8,
  },
  pointWrapper: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginVertical: 5,
  },
  pointDot: {
    width: 6,
    height: 6,
    borderRadius: 6,
    backgroundColor: 'grey',
    marginTop: 6,
  },
  pointText: {
    fontSize: 18,
    color: 'grey',
    fontFamily: Platform.OS === 'android'? 'Roboto' : null,
    marginLeft: 5,
  },
})