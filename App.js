import { StyleSheet} from 'react-native';
import SOS from './components/SOS'
import Map from './components/Map';
import ETA_Monitor from './components/ETA_Components/ETA_Monitor';
import Contacts from './components/Contacts';
import HomeScreen from './components/HomeScreen';
import  { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack=createStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="ETA_Monitor" component={ETA_Monitor} /> */}
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SOS" component={SOS} />
        <Stack.Screen name="Map" component={Map} />
        <Stack.Screen name="ETA_Monitor" component={ETA_Monitor} />
        <Stack.Screen name="Contacts" component={Contacts} />
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
  backButtonContainer: {

    backgroundColor: '#ccc', // light gray background
    padding: 10,
    borderRadius: 5,
    margin:5,
    padding: 5,
    paddingHorizontal:15,
  },
  backButtonText: {
    fontSize: 24,
    color: '#333', // dark gray text
  },
});
