import {createLoan} from '../UseCases/loan/CreateLoan.js';
import {getLoans} from '../UseCases/loan/GetLoans.js';
import {markLoanAsPaid} from '../UseCases/loan/MarkLoanAsPaid.js';
import {getUpcomingRepayments} from '../UseCases/loan/GetUpcomingRepayments.js';

import {createContact} from '../UseCases/contact/CreateContact.js';
import {getContacts} from '../UseCases/contact/GetContacts.js';

export {
  createLoan,
  getLoans,
  markLoanAsPaid,
  getUpcomingRepayments,
  createContact,
  getContacts
};
