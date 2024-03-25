import Apartment from '../src/models/apartment';
import { connectToDatabase, disconnectFromDatabase } from './../src/db';

// Connect to MongoDB
connectToDatabase();

const apartmentsData = [
  { name: 'Apartment 1', description: 'Description of Apartment 1', price: 1000, location: 'Location 1' },
  { name: 'Apartment 2', description: 'Description of Apartment 2', price: 1500, location: 'Location 2' },
];

// Seeder function
async function seedApartments() {
  try {
    await Apartment.insertMany(apartmentsData);
    console.log('Apartments seeded successfully');
  } catch (error) {
    console.error('Error seeding apartments:', error);
  } finally {
    disconnectFromDatabase();
  }
}

seedApartments();
