// pages/api/payments.js
import pool from '../../lib/db';

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        const { rows } = await pool.query(`
          SELECT p.*, l.rent_amount, t.name AS tenant_name
          FROM Payments p
          JOIN Leases l ON p.lease_id = l.id
          JOIN Tenants t ON l.tenant_id = t.id
        `);
        res.status(200).json(rows);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
      break;

    case 'POST':
      try {
        const { lease_id, payment_date, amount } = req.body;
        const query = 'INSERT INTO Payments (lease_id, payment_date, amount) VALUES ($1, $2, $3) RETURNING *';
        const values = [lease_id, payment_date, amount];
        const { rows } = await pool.query(query, values);
        res.status(201).json(rows[0]);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
      break;

    case 'DELETE':
      try {
        const { id } = req.body;
        const query = 'DELETE FROM Payments WHERE id = $1';
        await pool.query(query, [id]);
        res.status(204).end();
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
      break;

    default:
      res.setHeader('Allow', ['GET', 'POST', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
