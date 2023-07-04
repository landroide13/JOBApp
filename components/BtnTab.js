import { StyleSheet, Text, View, TouchableOpacity, Platform } from 'react-native'
import React from 'react'

const BtnTab = ({ name, activeTab, onHandleSearchType }) => {
  return (
    <TouchableOpacity
      style={styles.btn(name, activeTab)}
      onPress={onHandleSearchType}
    >
    <Text style={styles.btnText(name, activeTab)}>{name}</Text>
  </TouchableOpacity>
  )
}

export default BtnTab

const styles = StyleSheet.create({
  btn: (name, activeTab) => ({
    paddingVertical: 10,
    paddingHorizontal: 8,
    backgroundColor: name === activeTab ? '#6F42F0' : "#F3F4F8",
    borderRadius: 12,
    marginLeft: 2,
    shadowColor: '#efefef',
  }),
  btnText: (name, activeTab) => ({
    fontFamily: Platform.OS === 'android'? 'Roboto' : null,
    fontSize: 16,
    color: name === activeTab ? "#C3BFCC" : "#AAA9B8",
    fontWeight: 700
  }),
})