import express from 'express';
import cors from 'cors';

import { connectToDatabase } from './db';
import apartmentsRouter from './routes/apartments';

const app = express();
const PORT = 3000;

// Call the connectDB function to establish MongoDB connection
connectToDatabase();

// Apply middleware
app.use(cors()); // Enable CORS for all routes
app.use(express.json());

// Use the apartments router
app.use('/apartments', apartmentsRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
