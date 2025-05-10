import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from "cors"
import { loanRoutes } from './routes/loan.routes.js';
import { contactRoutes } from './routes/contact.routes.js';
import { errorMiddleware } from './middlewares/error.middleware.js';
import { createLoan } from '../UseCases/loan/CreateLoan.js';
import { getLoans } from '../UseCases/loan/GetLoans.js';
import { markLoanAsPaid } from '../UseCases/loan/MarkLoanAsPaid.js';
import { getUpcomingRepayments } from '../UseCases/loan/GetUpcomingRepayments.js';
import { createContact } from '../UseCases/contact/CreateContact.js';
import { getContacts } from '../UseCases/contact/GetContacts.js';
import { LoanRepositoryImpl } from '../infrastructure/repositories/LoanRepositoryImpl.js';
import { ContactRepositoryImpl } from '../infrastructure/repositories/ContactRepositoryImpl.js';
import { findByEmail } from '../UseCases/contact/FindByEmail.js';
import { findContact } from '../UseCases/loan/FindContact.js';
import connectionDB from '../infrastructure/database/mongodb.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173'
}));
const loanRepo = new LoanRepositoryImpl();
const contactRepo = new ContactRepositoryImpl();

const loanController = (await import('./controllers/LoanController.js')).LoanController({
  createLoan: createLoan(loanRepo),
  getLoans: getLoans(loanRepo),
  markLoanAsPaid: markLoanAsPaid(loanRepo),
  getUpcomingRepayments: getUpcomingRepayments(loanRepo),
  findContact:findContact(loanRepo)
});

const contactController = (await import('./controllers/ContactController.js')).ContactController({
  createContact: createContact(contactRepo),
  getContacts: getContacts(contactRepo),
  findByEmail:findByEmail(contactRepo)
});
app.get("/", (req, res) => {
  res.status(200).json({ message: "server is running" });
});

app.use('/api/loans', loanRoutes(loanController));
app.use('/api/contacts', contactRoutes(contactController));
app.use(errorMiddleware);

connectionDB()
app.listen(process.env.PORT, () => {
  console.log(`server is running on port ${process.env.PORT}`);
});