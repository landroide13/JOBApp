import { StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import React from 'react'

const JobScreen = ({ item }) => {

  const params = useSearchParams();
  
  const [refreshing, setRefreshing] = useState(false);

  const [activeTab, setActiveTab] = useState(tabs[0]);

  const tabs = ["About", "Qualifications", "Responsibilities"];

  const { data, isLoading, error, refetch } = useFetch();


  return (
    <View>
      <Text>JobScreen</Text>
    </View>
  )
}

export default JobScreen

const styles = StyleSheet.create({})