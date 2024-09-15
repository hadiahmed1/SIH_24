import React from 'react'
import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native-web'
export const LocationInput = ({val,setVal,ip,onClick}) => {
    return (
    <View style={styles.container}>
        <TextInput
            style={styles.input}
            onChangeText={setVal}
            value={val}
            placeholder={`Enter ${ip}`}
        />
        <Pressable style={styles.button} onPress={onClick }>
            <Text style={styles.text}>Click</Text>
        </Pressable>
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
    input: {
        height: 40,
        width: '70%',
        margin: 8,
        borderWidth: 1,
        padding: 10,
    },
    button: {
        backgroundColor: '#AADDE6', 
        height: 40,
        width: '25%',
        borderColor: 'black', // black border
        borderWidth: 1,
        borderLeftWidth: 0,
        margin:8,
        marginLeft: -12, // remove margin on left
        flex:1,
        justifyContent: 'center',
        alignItems:'center'
    },
    text: {
      textAlign: 'center', // center the text
      fontSize: 18, // increase font size
      fontWeight: 'bold' // make font bold
    },
});