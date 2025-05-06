import mongoose from 'mongoose';

const loanSchema = new mongoose.Schema({
  amount: Number,
  dueDate: Date,
  isPaid: { type: Boolean, default: false },
  isPartial: { type: Boolean, default: false },
  contactId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Contact',
  },
}, { timestamps: true });

export const LoanModel = mongoose.model('Loan', loanSchema);
