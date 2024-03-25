import React, {useState} from 'react';
import Toast from 'react-native-toast-message';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';

const AddApartment = ({navigation}) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');

  const handleInputChange = valueSetter => text => {
    valueSetter(text);
  };

  const renderInputField = (label, value, valueSetter, placeholder) => (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={handleInputChange(valueSetter)}
      />
    </View>
  );

  const handleAddApartment = () => {
    // Add your ip address unless localhost
    fetch('http://127.0.0.1:3000/apartments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        price: parseFloat(price),
        location,
        description,
      }),
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Failed to add apartment');
      })
      .then(data => {
        Toast.show({
          type: 'success',
          text1: 'Success',
          text2: 'Apartment added successfully',
        });
        navigation.navigate('Apartments');
      })
      .catch(error => {
        console.error('Error adding apartment:', error);
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: 'Failed to add apartment. Please try again later.',
        });
        navigation.navigate('Apartments');
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Add New Apartment</Text>
      {renderInputField(
        'Apartment Name:',
        name,
        setName,
        'Enter apartment name',
      )}
      {renderInputField('Price:', price, setPrice, 'Enter price')}
      {renderInputField('Location:', location, setLocation, 'Enter location')}
      {renderInputField(
        'Description:',
        description,
        setDescription,
        'Enter description',
      )}
      <Button
        disabled={!name || !description || !location || !price}
        title="Add Apartment"
        onPress={handleAddApartment}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
  },
});

export default AddApartment;
