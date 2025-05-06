import express from 'express';

export const contactRoutes = (contactController) => {
  const router = express.Router();

  router.post('/', contactController.createContact);
  router.get('/', contactController.getContacts);

  return router;
};
