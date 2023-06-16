import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, SafeAreaView } from 'react-native'
import { useEffect, useState} from 'react'
import { auth } from '../firebase'
import { useNavigation } from '@react-navigation/native'

const LoginScreen = () => {

    const [email, setEmail] = useState('')
    const [password, setPasword] = useState('')

    const navigation = useNavigation()

    useEffect(() =>{
    const unSubscribe = auth.onAuthStateChanged(user => {
            if(user){
                navigation.replace("Home")
            }
        })
        return unSubscribe
    }, [])

    const handleSignUp = () =>{
        auth
        .createUserWithEmailAndPassword(email, password)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log("Register With: ",user.email)
        })
        .catch(err => console.log(err.message))
    }

    const handleLogin = () =>{
        auth
            .signInWithEmailAndPassword(email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log("Login With: ", user.email)
            })
            .catch(err => console.log(err.message))
    }      

    return (
        <KeyboardAvoidingView style={styles.avoid} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <SafeAreaView style={styles.container}>
                <View style={styles.card}>
                    <View style={styles.inputContainer}>
                        <Text style={styles.title}>Login</Text>
                        <TextInput 
                            placeholder='Email'
                            value={email}
                            onChangeText={text => setEmail(text)}
                            style={styles.input}
                        />
                        <TextInput 
                            placeholder='Password'
                            value={password}
                            onChangeText={text => setPasword(text)}
                            style={styles.input}
                            secureTextEntry
                        />
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity onPress={handleLogin} style={styles.button}>
                            <Text style={styles.buttonText}>Login</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handleSignUp} style={[styles.button, styles.buttonOutLine]}>
                            <Text style={styles.buttonOutlineText}>Register</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        </KeyboardAvoidingView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    avoid:{
        flex: 1
    },
    container:{
        flex: 1,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'grey'
    },
    title:{
        fontSize:30,
        alignSelf:'center'
    },
    card:{
        width: '85%',
        backgroundColor:'white',
        borderRadius: 20,
        marginTop: 60
    },
    inputContainer:{
        width:'100%',
    },
    input:{
        backgroundColor: '#d3d3d3',
        width: '75%',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        alignSelf:'center',
        marginTop: 5
    },
    buttonContainer:{
        width: '60%',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems:'center',
        marginTop: 40,
        marginBottom: 10
    },
    button:{
        backgroundColor: '#F37A09',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center'
    },
    buttonText:{
        color: 'white',
        fontWeight: 700,
        fontSize: 16
    },
    buttonOutLine:{
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: '#0782f9',
        borderWidth: 2
    },
    buttonOutlineText:{
        color: '#0782f9',
        fontWeight: 700,
        fontSize: 16
    }
})