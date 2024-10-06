// pages/api/contractors.js
import pool from '../../lib/db';

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        // Fetch all contractors
        const { rows } = await pool.query('SELECT * FROM Contractors');
        res.status(200).json(rows);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
      break;

    case 'POST':
      try {
        const { name, contact, specialty } = req.body;
        const query = `
          INSERT INTO Contractors (name, contact, specialty)
          VALUES ($1, $2, $3) RETURNING *
        `;
        const values = [name, contact, specialty];
        const { rows } = await pool.query(query, values);
        res.status(201).json(rows[0]);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
      break;

    case 'PUT':
      try {
        const { id, name, contact, specialty } = req.body;
        const query = `
          UPDATE Contractors
          SET name = $1, contact = $2, specialty = $3
          WHERE id = $4 RETURNING *
        `;
        const values = [name, contact, specialty, id];
        const { rows } = await pool.query(query, values);
        res.status(200).json(rows[0]);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
      break;

    case 'DELETE':
      try {
        const { id } = req.body;
        const query = 'DELETE FROM Contractors WHERE id = $1';
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
