
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import JobScreen from './screens/JobScreen';
import HistoryScreen from './screens/HistoryScreen';
import RegisterScreen from './screens/RegisterScreen';
import JobSearchScreen from './screens/JobSearchScreen'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Register" component={RegisterScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
        <Stack.Screen name="History" component={HistoryScreen} options={{ title: 'History Applications' }} />
        <Stack.Screen name="JobDetail" component={JobScreen} options={{ title: '' }} />
        <Stack.Screen name="JobsScreens" component={JobSearchScreen} options={{ title: '' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
