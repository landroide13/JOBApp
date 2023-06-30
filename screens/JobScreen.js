import { StyleSheet, View, ScrollView, RefreshControl } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import useFetch from '../hook/useFetch'
import { useState, useCallback } from 'react'
import Tabs from '../components/Tabs'
import About from '../components/About'
import Qualifications from '../components/Qualifications'
import Responsabilities from '../components/Responsabilities'
import Company from '../components/Company'
import Footer from '../components/Footer'

const JobScreen = ({ route }) => {

  const [refreshing, setRefreshing] = useState(false);

  const { items } = route.params;

  const tabs = ["About", "Qualifications", "Responsabilities"];

  const [activeTab, setActiveTab] = useState(tabs[0]);

  const { data, isLoading, error, refetch } = useFetch();

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    refetch()
    setRefreshing(false)
  }, []);

  const displayTabContent = () => {
    switch (activeTab) {
      case "Qualifications":
        return (
          <Qualifications
            title='Qualifications'
            points={items.Qualifications ?? ["N/A"]}
          />
        );

      case "About":
        return (
          <About info={items.job_description ?? "No data provided"} />
        );

      case "Responsabilities":
        return (
          <Responsabilities
            title='Responsabilities'
            points={items.Responsibilities ?? ["N/A"]}
          />
        );

      default:
        return null;
    }
  };


  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} /> 
        }>

        <Company
          companyLogo={items.employer_logo}
          jobTitle={items.job_title}
          companyName={items.employer_name}
          location={items.job_country}
        />

        <Tabs
          tabs={tabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        { displayTabContent() }

      </ScrollView>

      <Footer  url={items?.job_apply_link ?? 'https://careers.google.com/jobs/results/'} />
    </>
  )
}

export default JobScreen

const styles = StyleSheet.create({})