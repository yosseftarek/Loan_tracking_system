export const getContacts = (contactRepository) => {
  return async () => {
    return await contactRepository.getContacts();
  };
};
