export const ContactController = (contactUseCases) => ({
  createContact: async (req, res, next) => {
    try {
      const contact = await contactUseCases.createContact(req.body);
      res.status(201).json(contact);
    } catch (err) {
      next(err);
    }
  },

  getContacts: async (req, res, next) => {
    try {
      const contacts = await contactUseCases.getContacts();
      res.status(200).json(contacts);
    } catch (err) {
      next(err);
    }
  }
});
