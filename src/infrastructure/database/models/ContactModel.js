import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
}, { timestamps: true });

export const ContactModel = mongoose.model('Contact', contactSchema);
