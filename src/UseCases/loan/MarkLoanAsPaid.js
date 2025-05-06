export const markLoanAsPaid = (loanRepository) => {
  return async (loanId, isPartial) => {
    return await loanRepository.markAsPaid(loanId, isPartial);
  };
};
