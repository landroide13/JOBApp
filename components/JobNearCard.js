import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'

const JobNearCard = ({ item, handleCardPress }) => {
  return (
   
      <View style={styles.container}>
        <TouchableOpacity onPress={() => handleCardPress(item)}>
          <Image source={{ uri: item.employer_logo }} resizeMode='contain' style={styles.logoImage} />
        </TouchableOpacity>
        <View style={styles.textContainer}>
          <Text style={styles.employer}>{ item.employer_name }</Text>
          <Text style={styles.Jobtitle}>{ item.job_title }</Text>
        </View>
      </View>
    
  )
}

export default JobNearCard

const styles = StyleSheet.create({
    container:{
        width: '85%',
        padding: 7,
        flexDirection: 'row',
        alignSelf:'center',
        justifyContent:'flex-start',
        backgroundColor: '#d3d3d3',
        marginVertical: 5,
        borderRadius: 8
      },

      textContainer:{
        marginVertical: 7,
        marginHorizontal: 8,
        flexDirection:'column',
        justifyContent:'center',
        alignItems: 'flex-start'
      },
      
      employer:{
        textAlign: 'center',
        justifyContent:'center',
        fontSize: 15,
        fontWeight: 'bold'
      },

      Jobtitle:{
        width: '58%',
        textAlign: 'left',
        justifyContent:'center',
        alignContent: 'stretch'
      },

      logoImage: {
        width: 55,
        height: 70,
        borderRadius:15
      },  
})