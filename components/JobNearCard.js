import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const JobNearCard = ({ item }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image source={{ uri: item.employer_logo }} resizeMode='contain' style={styles.logoImage} />
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={styles.employer}>{ item.employer_name }</Text>
        <Text>{ item.job_title }</Text>
      </View>
    </View>
  )
}

export default JobNearCard

const styles = StyleSheet.create({
    container:{
        width: '80%',
        padding: 7,
        flexDirection: 'row',
        alignSelf:'center',
        justifyContent:'flex-start',
        backgroundColor: '#d3d3d3',
        marginVertical: 5,
        borderRadius: 8
      },

      textContainer:{
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
      },  
})