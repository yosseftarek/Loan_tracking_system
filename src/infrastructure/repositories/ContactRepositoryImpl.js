import { ContactModel } from '../database/models/ContactModel.js';

export class ContactRepositoryImpl {
  async createContact(contactData) {
    const contact = new ContactModel(contactData);
    return await contact.save();
  }

  async getContacts() {
    return await ContactModel.find();
  }
  async findByEmail(email){
    return await ContactModel.findOne({email})
  }
}
