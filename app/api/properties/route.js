// api/properties.js
import pool from '../../lib/db';

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        const { rows } = await pool.query('SELECT * FROM Properties');
        res.status(200).json(rows);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
      break;

    case 'POST':
      try {
        const { address, type, size_sqft, total_units } = req.body;
        const query = 'INSERT INTO Properties (address, type, size_sqft, total_units) VALUES ($1, $2, $3, $4) RETURNING *';
        const values = [address, type, size_sqft, total_units];
        const { rows } = await pool.query(query, values);
        res.status(201).json(rows[0]);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
      break;

    case 'PUT':
      try {
        const { id, address, type, size_sqft, total_units } = req.body;
        const query = 'UPDATE Properties SET address = $1, type = $2, size_sqft = $3, total_units = $4 WHERE id = $5 RETURNING *';
        const values = [address, type, size_sqft, total_units, id];
        const { rows } = await pool.query(query, values);
        res.status(200).json(rows[0]);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
      break;

    case 'DELETE':
      try {
        const { id } = req.body;
        const query = 'DELETE FROM Properties WHERE id = $1';
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
