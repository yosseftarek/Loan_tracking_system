export const LoanController = (loanUseCases) => ({
  createLoan: async (req, res, next) => {
    try {
       const isExist=await loanUseCases.findContact(req.body?.contactId)
      if(!isExist){
        return res.status(409).json({messgae:'user is not exist'});
      }
      const loan = await loanUseCases.createLoan(req.body);
      res.status(201).json(loan);
    } catch (err) {
      next(err);
    }
  },

  getLoans: async (req, res, next) => {
    try {
      const loans = await loanUseCases.getLoans();
      res.status(200).json(loans);
    } catch (err) {
      next(err);
    }
  },

  markAsPaid: async (req, res, next) => {
    try {
      const { loanId } = req.params;
      const { isPartial } = req.body;
      const result = await loanUseCases.markLoanAsPaid(loanId, isPartial);
      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  },

  getUpcomingRepayments: async (req, res, next) => {
    try {
      const repayments = await loanUseCases.getUpcomingRepayments();
      res.status(200).json(repayments);
    } catch (err) {
      next(err);
    }
  }
});
