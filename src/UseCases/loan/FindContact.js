export const findContact = (loanRepository) => {
  return async (loanData) => {
    return await loanRepository.findContact(loanData);
  };
};
