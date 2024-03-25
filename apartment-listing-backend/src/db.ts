import mongoose from 'mongoose';

const uri: string = 'mongodb://127.0.0.1:27017/apartment-listing';

// Function to connect to the database
export const connectToDatabase = async (): Promise<void> => {
  try {
    await mongoose.connect(uri, { connectTimeoutMS: 2000 });
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
    throw err;
  }
};

// Function to disconnect from the database
export const disconnectFromDatabase = async (): Promise<void> => {
  try {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  } catch (err) {
    console.error('Error disconnecting from MongoDB:', err);
    throw err;
  }
};
