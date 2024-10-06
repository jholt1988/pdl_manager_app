// pages/api/leases.js

let leases = []; // Mock database for leases

export default function handler(req, res) {
  const { method } = req;

  switch (method) {
    case 'GET':
      // Return the list of leases
      res.status(200).json(leases);
      break;

    case 'POST':
      // Add a new lease
      const newLease = req.body;
      leases.push({ ...newLease, id: Date.now() });
      res.status(201).json(newLease);
      break;

    case 'PUT':
      // Update an existing lease
      const updatedLease = req.body;
      leases = leases.map((lease) =>
        lease.id === updatedLease.id ? updatedLease : lease
      );
      res.status(200).json(updatedLease);
      break;

    case 'DELETE':
      // Delete a lease
      const { id } = req.body;
      leases = leases.filter((lease) => lease.id !== id);
      res.status(204).end();
      break;

    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
