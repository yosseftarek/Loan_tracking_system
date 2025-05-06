export class Loan {
  constructor({ id, amount, dueDate, isPaid = false, isPartial = false, contactId }) {
    this.id = id;
    this.amount = amount;
    this.dueDate = dueDate;
    this.isPaid = isPaid;
    this.isPartial = isPartial;
    this.contactId = contactId;
  }
}
