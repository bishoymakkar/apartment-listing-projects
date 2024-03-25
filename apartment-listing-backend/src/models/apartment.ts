
import mongoose from 'mongoose';

interface Apartment {
  name: string;
  description: string;
  price: number;
  location: string;
}

const apartmentSchema = new mongoose.Schema<Apartment>({
  name: String,
  description: String,
  price: Number,
  location: String,
});

export default mongoose.model<Apartment>('Apartment', apartmentSchema);