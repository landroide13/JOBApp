import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const JobCard = ({ item, handleCardPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => handleCardPress(item)}>
        <Image source={{ uri: item.employer_logo }} resizeMode='contain' style={styles.logoImage} />
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={styles.employer}>{ item.employer_name }</Text>
        <Text>{ item.job_title }</Text>
        <Text>{ item.job_country }</Text>
      </View>
    </View>   
  )
}

export default JobCard

const styles = StyleSheet.create({

  container:{
    height: '65%',
    padding: 11,
    flexDirection: 'row',
    alignSelf:'center',
    backgroundColor: '#d3d3d3',
    marginVertical: 8,
    marginHorizontal: 8,
    borderRadius: 8
  },

  textContainer:{
    marginVertical: 7,
    marginHorizontal: 7,
    flexDirection:'column',
    justifyContent:'center',
    alignItems: 'center'
  },

  employer:{
    textAlign: 'center',
    justifyContent:'center',
    fontSize: 15,
    fontWeight: 'bold'
  },

  logoImage: {
    width: 55,
    height: 55,
    borderRadius:15
  },
})