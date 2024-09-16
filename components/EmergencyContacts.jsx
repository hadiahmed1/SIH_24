import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  Linking,
  StyleSheet,
} from 'react-native';

const EmergencyContacts = () => {
  // State for storing the list of contacts
  const [contacts, setContacts] = useState([
    { id: '1', name: 'Police', phone: '100' },
    { id: '2', name: 'Fire Department', phone: '101' },
  ]);

  // State for form inputs
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  // Function to call a contact
  const callContact = (phone) => {
    Linking.openURL(`tel:${phone}`);
  };

  // Function to send SMS to a contact
  const messageContact = (phone) => {
    Linking.openURL(`sms:${phone}`);
  };

  // Function to add a new contact
  const addContact = () => {
    if (name.trim() === '' || phone.trim() === '') {
      alert('Please enter both name and phone number.');
      return;
    }

    const newContact = {
      id: Math.random().toString(), // Generating a unique ID
      name,
      phone,
    };

    setContacts((prevContacts) => [...prevContacts, newContact]);
    setName(''); // Clear input after adding
    setPhone(''); // Clear input after adding
  };

  // Rendering each contact
  const renderContactItem = ({ item }) => (
    <View style={styles.contactCard}>
      <Text style={styles.contactName}>{item.name}</Text>
      <Text style={styles.contactPhone}>{item.phone}</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => callContact(item.phone)}
        >
          <Text style={styles.buttonText}>Call</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => messageContact(item.phone)}
        >
          <Text style={styles.buttonText}>Message</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Emergency Contacts</Text>

      {/* Contact Form */}
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Contact Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Contact Phone"
          keyboardType="phone-pad"
          value={phone}
          onChangeText={setPhone}
        />
        <TouchableOpacity style={styles.addButton} onPress={addContact}>
          <Text style={styles.addButtonText}>Add Contact</Text>
        </TouchableOpacity>
      </View>

      {/* Contacts List */}
      <FlatList
        data={contacts}
        keyExtractor={(item) => item.id}
        renderItem={renderContactItem}
      />
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  form: {
    marginBottom: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  addButton: {
    backgroundColor: '#1E88E5',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  contactCard: {
    backgroundColor: '#fff',
    padding: 20,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  contactName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  contactPhone: {
    fontSize: 16,
    color: 'gray',
    marginVertical: 5,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  button: {
    backgroundColor: '#1E88E5',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default EmergencyContacts;
