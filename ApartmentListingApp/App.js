import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import AddApartment from './src/screens/AddApartment';
import ApartmentsPage from './src/screens/ApartmentsPage';
import ApartmentDetailsPage from './src/screens/ApartmentDetailsPage';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Apartments">
        <Stack.Screen name="Apartments" component={ApartmentsPage} />
        <Stack.Screen
          name="ApartmentDetails"
          component={ApartmentDetailsPage}
        />
        <Stack.Screen name="AddApartment" component={AddApartment} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
