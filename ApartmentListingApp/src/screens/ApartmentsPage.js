import React, {useState} from 'react';
import {useFocusEffect} from '@react-navigation/native'; // Import useFocusEffect
import Toast from 'react-native-toast-message';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';

const ApartmentsPage = ({navigation}) => {
  const [apartments, setApartments] = useState([]);

  useFocusEffect(
    React.useCallback(() => {
      fetchApartments();
    }, []),
  );

  const fetchApartments = async () => {
    try {
      // Add your ip address unless localhost
      const response = await fetch('http://locahost:3000/apartments');
      const data = await response.json();
      setApartments(data);
    } catch (error) {
      console.error('Error fetching apartments:', error);
    }
  };

  const navigateToAddApartment = () => {
    navigation.navigate('AddApartment');
  };

  const navigateToApartmentDetails = apartment => {
    navigation.navigate('ApartmentDetails', {apartment});
  };

  const renderApartmentItem = ({item}) => (
    <TouchableOpacity onPress={() => navigateToApartmentDetails(item)}>
      <View style={styles.apartmentItem}>
        <Text style={styles.apartmentName}>{item.name}</Text>
        <Text style={styles.apartmentPrice}>{item.price}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Apartment Listing Page</Text>
      <FlatList
        data={apartments}
        renderItem={renderApartmentItem}
        keyExtractor={item => item.id}
      />
      <TouchableOpacity
        style={styles.addButton}
        onPress={navigateToAddApartment}>
        <Text style={styles.addButtonText}>Add Apartment</Text>
      </TouchableOpacity>
      <Toast ref={ref => Toast.setRef(ref)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  apartmentItem: {
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  apartmentName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  apartmentPrice: {
    fontSize: 16,
    marginTop: 5,
    color: '#666',
  },
  addButton: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ApartmentsPage;
