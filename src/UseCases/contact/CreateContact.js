export const createContact = (contactRepository) => {
  return async (contactData) => {
    return await contactRepository.createContact(contactData);
  };
};
