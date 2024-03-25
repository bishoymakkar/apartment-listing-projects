"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const apartments_1 = __importDefault(require("./routes/apartments"));
const app = (0, express_1.default)();
const PORT = 3000;
// Connect to MongoDB using Mongoose URI (replace with your connection string)
const uri = 'mongodb://localhost:27017/apartment-listing';
mongoose_1.default.connect(uri, { connectTimeoutMS: 30000 })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Error connecting to MongoDB:', err));
// Apply middleware
app.use(express_1.default.json());
// Use the apartments router
app.use('/apartments', apartments_1.default);
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
//# sourceMappingURL=app.js.map