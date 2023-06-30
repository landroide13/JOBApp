import { StyleSheet, Text, 
        TouchableOpacity, View, 
        Image, TextInput, FlatList, 
        ActivityIndicator, StatusBar } from 'react-native'
import { useState } from 'react'
import { auth } from '../firebase'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native'
import JobCard from '../components/JobCard'
import JobNearCard from '../components/JobNearCard'
import useFetch from '../hook/useFetch'

const HomeScreen = () => {

    const [searchTerm, setSearchTerm] = useState("");

    const navigation = useNavigation()

    const { data, isLoading, error } = useFetch()

    const [selectedJob, setSelectedJob] = useState();

    const handleCardPress = items => {
        console.log(items)
        navigation.navigate('JobDetail', { items });
        setSelectedJob(items._id);
      };

    const handleClick= () => {
        navigation.navigate('JobSearchScreen');
    }  

    // const handleSignout = () =>{
    //     auth
    //     .signOut()
    //     .then(() =>{
    //         navigation.replace("Login")
    //     })
    // }

  return (
    <SafeAreaView style={styles.container}>
        
        <View>
            <View style={styles.header}>
                <Image style={styles.userImg} source={require('../assets/profile.jpg')} />
                <Text style={styles.user}>Hello: { auth.currentUser?.email }</Text>
                <TouchableOpacity style={styles.buttonHeader} onPress={()=> navigation.navigate('History')}>
                    <Image style={styles.userImgSearch} source={require('../assets/share.png')} />
                </TouchableOpacity>
            </View>

            <Text style={styles.title}>Find your Perfect Job</Text>

            <View style={styles.inputContainer}>
                <TextInput 
                    placeholder='Find a Job'
                    onChangeText={(text) => setSearchTerm(text)}
                    // value={searchTerm}
                    style={styles.inputSearch}
                />
                <TouchableOpacity style={styles.buttonSearch} onPress={() => navigation.navigate('JobsScreens')}>
                    <Image style={styles.userImgSearch} source={require('../assets/search.png')} />
                </TouchableOpacity>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.buttonOptions} onPress={() =>{}}>
                    <Text style={styles.options}>Full-Time</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonOptions} onPress={() =>{}}>
                    <Text style={styles.options}>Part-Time</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonOptions} onPress={() =>{}}>
                    <Text style={styles.options}>Contactor</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.title}>Popular Jobs</Text>

            <View style={styles.popularContainer}>
            {
                isLoading ? ( <ActivityIndicator size="large" /> ):
                error ? (<Text>Something went Wrong</Text>) :
                (
                    <FlatList
                        data={data}
                        renderItem={({ item } ) => (
                            <JobCard item={ item } selectedJob={selectedJob} handleCardPress={handleCardPress}  />
                        )}
                        keyExtractor={(item) => item._id }
                        horizontal
                    />
                )
            } 
            </View>

            
                <Text style={styles.title}>Near by Jobs</Text>
            
                <View style={styles.nearByContainer}>
                {
                    isLoading ? ( <ActivityIndicator size="large" /> ):
                    error ? (<Text>Something went wrong</Text>) :
                    (
                        <FlatList
                            data={data}
                            renderItem={({ item }) => (
                                <JobNearCard item={ item } selectedJob={selectedJob} handleCardPress={handleCardPress}  />
                            )}
                            keyExtractor={(item) => item._id }
                        />
                    )
                } 
                </View>
        </View>
        
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 8,
        marginTop: StatusBar.currentHeight || 0,
    },
    header:{
        flexDirection: 'row',
        justifyContent:'space-around',
    },
    user:{
        fontSize:18,
        alignSelf:'center'
    },
    userImgSearch:{
        width: 30,
        height: 30,
        tintColor: 'white'
    },
    userImg:{
        width: 50,
        height: 50,
        borderRadius: 10,
    },
    title:{
        fontSize:25,
        alignSelf:'flex-start',
        marginTop: 6
    },
    inputContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    inputSearch:{
        backgroundColor: '#d3d3d3',
        width: '75%',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        alignSelf:'center',
        marginTop: 5
    },
    buttonContainer:{
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop: 20
    },
    buttonOptions:{
        backgroundColor:'white',
        padding: 15,
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 15
    },
    options:{
        fontSize: 15,
        fontWeight: 'bold'
    },
    buttonSearch:{
        backgroundColor: '#F37A09',
        width: '18%',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonHeader:{
        backgroundColor: 'green',
        width: '18%',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },

    popularContainer:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'flex-start'
    },

    nearByContainer:{
        flex: 1,
        flexDirection: 'column',
    }
})