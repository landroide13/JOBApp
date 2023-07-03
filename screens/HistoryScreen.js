import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native'
import { useState, useEffect } from 'react'

import { DatabaseConnection } from '../connection/connection'
import { SafeAreaView } from 'react-native-safe-area-context'

const db = DatabaseConnection.getConnection()

const HistoryScreen = () => {

  const [listItem, setListItem] = useState([])

  useEffect(()=>{
      db.transaction(tx => {
          tx.executeSql(
              'SELECT * from Jobs',
              [],
              (tx, results)=>{
                  var temp = [];
                  for (let i=0; i<results.rows.length; i++){
                      temp.push(results.rows.item(i))
                  }
                  setListItem(temp)
              }
          )
      })
  }, [])


  return (
    <SafeAreaView style={styles.container}>

      <FlatList
        data={listItem}
        renderItem={({ item } ) => (

          <View style={styles.card} >

            <Image source={{ uri: item.employer_logo }} resizeMode='contain' style={styles.logoImage} />

            <View style={styles.text}>
              <Text style={styles.title}>{item.job_title}</Text>
              <Text style={styles.employer}>{item.employer_name}</Text>
            </View>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.deleteBtn}>Delete</Text>
            </TouchableOpacity>
          </View>

        )}
        keyExtractor={item => item._id }                
      />    

    </SafeAreaView>
  )
}

export default HistoryScreen

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 8,
  },

  card:{
    width: '95%',
    flexDirection: 'row',
    padding: 11,
    alignItems: 'center',
    alignSelf:'center',
    backgroundColor: '#d3d3d3',
    marginVertical: 8,
    marginHorizontal: 8,
    borderRadius: 8
  },

  text:{
    flexDirection: 'column',
    width: '68%',
    padding: 15,
  },

  title:{
    fontSize: 15,
    fontWeight: 900
  },

  btn:{
    backgroundColor: 'tomato',
    borderRadius: 12,
    justifyContent:'flex-end'
  },

  deleteBtn:{
    padding: 10,
    fontWeight: 800,
    color: 'white'
  },

  employer:{
    fontStyle: 'italic'
  },

  logoImage: {
    width: 55,
    height: 55,
    borderRadius:10
  },
})