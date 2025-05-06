export const getUpcomingRepayments = (loanRepository) => {
  return async () => {
    return await loanRepository.getUpcomingRepayments();
  };
};
