export const findByEmail = (contactRepository) => {
  return async (contactData) => {
    return await contactRepository.findByEmail(contactData);
  };
};
