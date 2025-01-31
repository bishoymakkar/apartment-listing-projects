"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const apartmentSchema = new mongoose_1.default.Schema({
    name: String,
    description: String,
    price: Number,
    location: String,
});
exports.default = mongoose_1.default.model('Apartment', apartmentSchema);
//# sourceMappingURL=apartment.js.map