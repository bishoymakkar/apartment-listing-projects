import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const DetailRow = ({label, value}) => {
  return (
    <View style={styles.row}>
      <Text style={styles.label}>{label}:</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

const ApartmentDetailsPage = ({route}) => {
  const {apartment} = route.params;

  return (
    <View style={styles.container}>
      <DetailRow label="Apartment Name" value={apartment.name} />
      <DetailRow label="Description" value={apartment.description} />
      <DetailRow label="Price" value={apartment.price} />
      <DetailRow label="Location" value={apartment.location} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 14,
    backgroundColor: '#f9f9f9',
  },
  row: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  label: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  value: {
    flex: 1,
    fontSize: 16,
    color: '#666',
  },
});

export default ApartmentDetailsPage;
