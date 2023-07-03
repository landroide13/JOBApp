import { StyleSheet, Text, View, Image, Platform } from 'react-native'
import React from 'react'

const Company = ({ companyLogo, jobTitle, companyName, location }) => {
  return (
        <View style={styles.container}>
          <View style={ styles.logoBox }>
          <Image
              source={{ uri: companyLogo }}
              style={styles.logoImage}
            />
          </View>
    
           <View style={styles.jobTitleBox}>
            <Text style={styles.jobTitle}>{jobTitle}</Text>
          </View>
    
          <View style={styles.companyInfoBox}>
            <Text style={styles.companyName}>{companyName} / </Text>
            <View style={styles.locationBox}>
              <Image
                
                resizeMode='contain'
                style={styles.locationImage}
              />
              <Text style={styles.locationName}>{location}</Text>
            </View>
          </View>
    
        </View>
  )
}

export default Company

const styles = StyleSheet.create({
    container: {
        marginVertical: 12,
        justifyContent: "center",
        alignItems: "center",
      },
      logoBox: {
        width: 80,
        height: 80,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFF",
        borderRadius: 16,
      },
      logoImage: {
        width: "80%",
        height: "80%",
      },
      jobTitleBox: {
        marginTop: 5,
      },
      jobTitle: {
        fontSize: 22,
        color: 'grey',
        textAlign: "center",
      },
      companyInfoBox: {
        marginTop: 15 / 2,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      },
      companyName: {
        fontSize: 18,
        color: 'grey',
        fontFamily: Platform.OS === 'android'? 'Roboto' : null,
      },
      locationBox: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      },
      locationImage: {
        width: 14,
        height: 14,
      },
      locationName: {
        fontSize: 16,
        color: 'grey',
        fontFamily: Platform.OS === 'android'? 'Roboto' : null,
        marginLeft: 2,
      },

})