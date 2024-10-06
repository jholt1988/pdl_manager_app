// pages/api/leases.js
import pool from '../../lib/db';

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        const { rows } = await pool.query(`
          SELECT l.*, t.name AS tenant_name, p.address AS property_address
          FROM Leases l
          JOIN Tenants t ON l.tenant_id = t.id
          JOIN Properties p ON l.property_id = p.id
        `);
        res.status(200).json(rows);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
      break;

    case 'POST':
      try {
        const { tenant_id, property_id, start_date, end_date, rent_amount } = req.body;
        const query = 'INSERT INTO Leases (tenant_id, property_id, start_date, end_date, rent_amount) VALUES ($1, $2, $3, $4, $5) RETURNING *';
        const values = [tenant_id, property_id, start_date, end_date, rent_amount];
        const { rows } = await pool.query(query, values);
        res.status(201).json(rows[0]);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
      break;

    case 'PUT':
      try {
        const { id, tenant_id, property_id, start_date, end_date, rent_amount } = req.body;
        const query = 'UPDATE Leases SET tenant_id = $1, property_id = $2, start_date = $3, end_date = $4, rent_amount = $5 WHERE id = $6 RETURNING *';
        const values = [tenant_id, property_id, start_date, end_date, rent_amount, id];
        const { rows } = await pool.query(query, values);
        res.status(200).json(rows[0]);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
      break;

    case 'DELETE':
      try {
        const { id } = req.body;
        const query = 'DELETE FROM Leases WHERE id = $1';
        await pool.query(query, [id]);
        res.status(204).end();
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
      break;

    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
