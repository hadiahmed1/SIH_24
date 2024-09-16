import React from 'react'
import { StyleSheet,Pressable,Text, View } from 'react-native-web'

const SOS_Sender = ({setIsSafe}) => {
  return (
    <View style={{justifyContent:'center'}}>
        <Text style={styles.text}>Are you okay</Text>
        <View style={styles.container}>
            <Pressable onPress={()=>setIsSafe(true)}
            style={[styles.button,{backgroundColor:"green"}]}>
                <Text>Yes</Text>
            </Pressable>
            <Pressable onPress={()=>console.log("no")}
            style={[styles.button,{backgroundColor:"red"}]}>
                <Text>No</Text>
            </Pressable>
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
    button: {
        height: 40,
        width: '40%',
        borderColor: 'black', // black border
        borderWidth: 1,
        margin:8,
        flex:1,
        justifyContent: 'center',
        alignItems:'center',
        padding: 1,
    },
    text: {
      textAlign: 'center', // center the text
      fontSize: 18, // increase font size
      fontWeight: 'bold' // make font bold
    },
})
export default SOS_Sender
