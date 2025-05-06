export const getLoans = (loanRepository) => {
  return async () => {
    return await loanRepository.getLoans();
  };
};
