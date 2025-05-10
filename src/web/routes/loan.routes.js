import express from 'express';

export const loanRoutes = (loanController) => {
  const router = express.Router();

  router.post('/', loanController.createLoan);
  router.get('/', loanController.getLoans);
  router.patch('/:loanId/markPaid', loanController.markAsPaid);
  router.get('/upcoming/:contactId', loanController.getUpcomingRepayments);

  return router;
};
