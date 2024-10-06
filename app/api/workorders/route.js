// pages/api/workorders.js
import pool from '../../lib/db';

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        // Fetch all work orders with property and contractor details
        const { rows } = await pool.query(`
          SELECT wo.*, p.address AS property_address, c.name AS contractor_name
          FROM WorkOrders wo
          JOIN Properties p ON wo.property_id = p.id
          LEFT JOIN Contractors c ON wo.contractor_id = c.id
        `);
        res.status(200).json(rows);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
      break;

    case 'POST':
      try {
        const { property_id, contractor_id, request_date, description, status } = req.body;
        const query = `
          INSERT INTO WorkOrders (property_id, contractor_id, request_date, description, status)
          VALUES ($1, $2, $3, $4, $5) RETURNING *
        `;
        const values = [property_id, contractor_id, request_date, description, status];
        const { rows } = await pool.query(query, values);
        res.status(201).json(rows[0]);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
      break;

    case 'PUT':
      try {
        const { id, property_id, contractor_id, request_date, description, status } = req.body;
        const query = `
          UPDATE WorkOrders
          SET property_id = $1, contractor_id = $2, request_date = $3, description = $4, status = $5
          WHERE id = $6 RETURNING *
        `;
        const values = [property_id, contractor_id, request_date, description, status, id];
        const { rows } = await pool.query(query, values);
        res.status(200).json(rows[0]);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
      break;

    case 'DELETE':
      try {
        const { id } = req.body;
        const query = 'DELETE FROM WorkOrders WHERE id = $1';
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
