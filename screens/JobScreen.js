import { StyleSheet, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import useFetch from '../hook/useFetch'
import { useState } from 'react'
import Tabs from '../components/Tabs'
import About from '../components/About'
import Qualifications from '../components/Qualifications'
import Responsabilities from '../components/Responsabilities'

const JobScreen = ({ item }) => {

  //const [refreshing, setRefreshing] = useState(false);

  const tabs = ["About", "Qualifications", "Responsabilities"];

  const [activeTab, setActiveTab] = useState(tabs[0]);

  const { data, isLoading, error, refetch } = useFetch();

  const displayTabContent = () => {
    switch (activeTab) {
      case "Qualifications":
        return (
          <Qualifications
            title='Qualifications'
            points={data.Qualifications ?? ["N/A"]}
          />
        );

      case "About":
        return (
          <About info={data.job_description ?? "No data provided"} />
        );

      case "Responsabilities":
        return (
          <Responsabilities
            title='Responsabilities'
            points={data.Responsibilities ?? ["N/A"]}
          />
        );

      default:
        return null;
    }
  };


  return (
    <View>
      <Tabs
        tabs={tabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      { displayTabContent() }
    </View>
  )
}

export default JobScreen

const styles = StyleSheet.create({})