import React from 'react'
import { StyleSheet, View,Text, Pressable } from 'react-native';
const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>{/*Home Page*/ }
      <Pressable style={[styles.optionButton,{backgroundColor:"red"}]} onPress={()=>{navigation.navigate("SOS")}}>
        <Text style={styles.optionText}>SOS</Text>
      </Pressable>
      <Pressable style={[styles.optionButton,{backgroundColor:"blue"}]} onPress={()=>{navigation.navigate("Map")}}>
        <Text style={styles.optionText}>Map</Text>
      </Pressable>
      <Pressable style={[styles.optionButton,{backgroundColor:"yellow"}]} onPress={()=>{navigation.navigate("ETA_Monitor")}}>
        <Text style={styles.optionText}>ETA_Monitor</Text>
      </Pressable>
      <Pressable style={[styles.optionButton,{backgroundColor:"green"}]} onPress={()=>{navigation.navigate("EmergencyContacts")}}>
        <Text style={styles.optionText}>EmergencyContacts</Text>
      </Pressable>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  optionButton: {
    width: '90%', // adjust the size to your liking
    height: 100, // adjust the size to your liking
    borderRadius: 10, // add some rounded corners
    justifyContent: 'center',
    alignItems: 'center',
    padding:10,
    margin:5,
  },
  optionText: {
    fontSize: 24, // adjust the font size to your liking
    color: '#FFFFFF', // white text color, adjust to your liking
  },
});
export default HomeScreen
