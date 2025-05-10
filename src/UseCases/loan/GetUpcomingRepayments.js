export const getUpcomingRepayments = (loanRepository) => {
  return async (loanData) => {
    return await loanRepository.getUpcomingRepayments(loanData);
  };
};
