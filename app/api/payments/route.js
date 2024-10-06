// pages/api/payments.js

let payments = []; // Mock database for payments

export default function handler(req, res) {
  const { method } = req;

  switch (method) {
    case 'GET':
      // Fetch all payments or filter by leaseId
      const { leaseId } = req.query;
      const filteredPayments = leaseId
        ? payments.filter((payment) => payment.leaseId === parseInt(leaseId))
        : payments;
      res.status(200).json(filteredPayments);
      break;

    case 'POST':
      // Add a new payment
      const newPayment = req.body;
      payments.push({ ...newPayment, id: Date.now() });
      res.status(201).json(newPayment);
      break;

    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
