export const ContactController = (contactUseCases) => ({
  createContact: async (req, res, next) => {
    try {
      const isExist=await contactUseCases.findByEmail(req.body?.email)
      if(isExist){
        return res.status(409).json({messgae:'Email is already registered'});
      }
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
