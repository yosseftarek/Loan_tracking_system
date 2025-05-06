import { LoanModel } from '../database/models/LoanModel.js';

export class LoanRepositoryImpl {
  async createLoan(loanData) {
    const loan = new LoanModel(loanData);
    return await loan.save();
  }

  async getLoans() {
    return await LoanModel.find().populate('contactId');
  }

  async markAsPaid(loanId, isPartial) {
    const update = { isPaid: !isPartial, isPartial };
    return await LoanModel.findByIdAndUpdate(loanId, update, { new: true });
  }

  async getUpcomingRepayments() {
    const now = new Date();
    const upcoming = new Date();
    upcoming.setDate(now.getDate() + 7);
    return await LoanModel.find({
      dueDate: { $gte: new Date() },
      isPaid: false
    });
  }
}
