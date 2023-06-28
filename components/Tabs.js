import { StyleSheet, View, FlatList } from 'react-native'
import React from 'react'
import BtnTab from './BtnTab';

const Tabs = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={tabs}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <BtnTab
            name={item}
            activeTab={activeTab}
            onHandleSearchType={() => setActiveTab(item)}
          />
        )}
        contentContainerStyle={{ }}
        keyExtractor={(item) => item}
      />
    </View>
  )
}

export default Tabs

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 8,
    alignItems: 'center'
  },
 
})