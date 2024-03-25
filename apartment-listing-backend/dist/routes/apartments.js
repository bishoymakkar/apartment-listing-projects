"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const apartment_1 = __importDefault(require("../models/apartment"));
const router = express_1.default.Router();
// Get all apartments
router.get('/', async (req, res) => {
    try {
        const apartments = await apartment_1.default.find();
        res.json(apartments);
    }
    catch (err) {
        console.error('Error fetching apartments:', err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});
// Get details of a specific apartment
router.get('/:id', async (req, res) => {
    try {
        const apartment = await apartment_1.default.findById(req.params.id);
        if (!apartment) {
            return res.status(404).json({ message: 'Apartment not found' });
        }
        res.json(apartment);
    }
    catch (err) {
        console.error('Error fetching apartment details:', err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});
// Add a new apartment (implement validation later)
router.post('/', express_1.default.json(), async (req, res) => {
    try {
        const { name, description, price, location } = req.body;
        const newApartment = new apartment_1.default({ name, description, price, location });
        await newApartment.save();
        res.status(201).json({ message: 'Apartment added successfully', id: newApartment._id });
    }
    catch (err) {
        console.error('Error adding apartment:', err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});
exports.default = router;
//# sourceMappingURL=apartments.js.map