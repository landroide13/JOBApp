import { StyleSheet, Text, View, FlatList, StatusBar, SafeAreaView } from 'react-native'
import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

import useFetch from '../hook/useFetch'
import JobCard from '../components/JobCard'

const JobSearchScreen = () => {

  const navigation = useNavigation()

  const { data, isLoading, error } = useFetch()

  const [selectedJob, setSelectedJob] = useState();

  const handleCardPress = items => {
    console.log(items)
    navigation.navigate('JobDetail', { items });
    setSelectedJob(items._id);
  };


  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.title}>Popular Jobs</Text>

      <View style={styles.popularContainer}>
        {/* <FlatList
            data={data}
            renderItem={({ item }) => (
            <JobCard item={ item } extra={styles.extras} selectedJob={selectedJob} handleCardPress={handleCardPress} />
          )}
          keyExtractor={(item) => item._id }
        /> */}
      </View>
    </SafeAreaView>
  )
}

export default JobSearchScreen

const styles = StyleSheet.create({

  container:{
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },

  title:{
    fontSize:25,
    alignSelf:'flex-start',
    marginTop: 6
  },

  popularContainer:{
    flex: 2,
    flexDirection: 'column',
    width: '65%',
  },

  extras:{
    height: '0%'
  }
})