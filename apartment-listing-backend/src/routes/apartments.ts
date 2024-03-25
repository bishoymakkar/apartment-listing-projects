import express, { Request, Response } from 'express';
import Apartment from '../models/apartment';

interface ApartmentRequestBody {
    name: string;
    description: string;
    price: number;
    location: string;
  }
  

const router = express.Router();

/**
 * Retrieves all apartments data from the database.
 * 
 * This endpoint fetches information about all apartments stored in the database.
 * 
 * @route GET /
 * @returns {object} Array of apartment objects.
 * @throws {Error} Internal Server Error - If there's an issue fetching apartments data.
 */
router.get('/', async (req, res) => {
  try {
    const apartments = await Apartment.find();
    res.json(apartments);
  } catch (err) {
    console.error('Error fetching apartments:', err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

/**
 * Retrieves details of a specific apartment by ID.
 * 
 * This endpoint fetches information about a specific apartment identified by its unique ID.
 * 
 * @route GET /:id
 * @param {string} id - The unique identifier of the apartment.
 * @returns {object} Details of the apartment.
 * @throws {Error} Apartment not found - If the specified ID does not match any apartment in the database.
 * @throws {Error} Internal Server Error - If there's an issue fetching apartment details.
 * 
 */
router.get('/:id', async (req, res) => {
  try {
    const apartment = await Apartment.findById(req.params.id);
    if (!apartment) {
      return res.status(404).json({ message: 'Apartment not found' });
    }
    res.json(apartment);
  } catch (err) {
    console.error('Error fetching apartment details:', err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

/**
 * Adds a new apartment to the database.
 * 
 * This endpoint allows the addition of a new apartment to the database. 
 * 
 * @route POST /
 * @param {object} req.body - The request body containing apartment details.
 * @param {string} req.body.name - The name of the apartment.
 * @param {string} req.body.description - The description of the apartment.
 * @param {number} req.body.price - The price of the apartment.
 * @param {string} req.body.location - The location of the apartment.
 * @returns {object} Confirmation message with the ID of the newly added apartment.
 * @throws {Error} All fields are required - If any required field is missing in the request body.
 * @throws {Error} Internal Server Error - If there's an issue adding the apartment to the database.
 */
router.post('/', express.json(), async (req, res) => {
  try {
    addApartment(req, res);
  } catch (err) {
    console.error('Error adding apartment:', err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

/**
 * Helper function to add a new apartment.
 * 
 * This function is responsible for validating the request body and adding a new apartment to the database.
 * 
 * @param {object} req - The request object containing the request body.
 * @param {object} res - The response object.
 * @throws {Error} All fields are required - If any required field is missing in the request body.
 * @throws {Error} Internal Server Error - If there's an issue saving the new apartment to the database.
 */
const addApartment = async (req: Request<{}, {}, ApartmentRequestBody>, res: Response) => {
    const { name, description, price, location } = req.body;

    if (!name || !description || !price || !location) {
        return res.status(400).json({ message: 'All fields are required' });
    }
  
    const newApartment = new Apartment({ name, description, price, location });
    await newApartment.save();
    res.status(201).json({ message: 'Apartment added successfully', id: newApartment._id });  
  };

export default router;
