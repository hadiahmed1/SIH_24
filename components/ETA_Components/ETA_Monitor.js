import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native-web'
import { LocationInput } from './LocationInput';
import SOS_Sender from './SOS_Sender';

const ETA_Monitor = () => {
  const [start, setStart] = useState('');
  const [destination, setDestination] = useState('');
  const [eta, setEta] = useState(5);
  const [isSafe, setIsSafe] = useState(true);
  const sendSOS=()=>console.log("Sending SOS")
  const monitorETA=()=>{
    console.log("Setting timer for:",eta)
    setTimeout(() => {
      console.log("Time over, Are you okay")
      setIsSafe(false)
      setTimeout(() => {
        if(isSafe){
          sendSOS();
        }
      }, 5000);
    }, parseInt(eta)*1000);
  }
  return (
    <View>
      {/* Input Start */}
      <LocationInput val={start} setVal={setStart} ip={"Start"} 
      onClick={()=>console.log(`Start=${start}`)}/>
      <LocationInput val={destination} setVal={setDestination} ip={"Destination"} 
      onClick={()=>console.log(`Destination=${destination}`)}/>
      {/* ETA Monitor */}
      <View style={styles.container}>
        {/* Temporary Manual Input */}
        <LocationInput val={eta} setVal={setEta} ip={"ETA"} onClick={monitorETA}/>
        <Text style={styles.text}>Expected ETA={eta}</Text>
      </View>
      <View style={styles.container}>
      </View>
      {/* are you okay */}
      <View style={styles.container}>
        {!isSafe && <SOS_Sender setIsSafe={setIsSafe}/>}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    width: '90%',
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center', // center the text
    fontSize: 18, // increase font size
    fontWeight: 'bold' // make font bold
  },
});

export default ETA_Monitor