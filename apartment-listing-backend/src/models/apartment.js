"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var apartmentSchema = new mongoose_1.default.Schema({
    name: String,
    description: String,
    price: Number,
    location: String,
});
exports.default = mongoose_1.default.model('Apartment', apartmentSchema);
