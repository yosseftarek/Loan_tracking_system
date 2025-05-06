export const createLoan = (loanRepository) => {
  return async (loanData) => {
    return await loanRepository.createLoan(loanData);
  };
};
