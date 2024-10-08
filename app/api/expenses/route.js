// pages/api/expenses.js
import pool from '../../lib/db';

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        // Fetch all expenses with property details
        const { rows } = await pool.query(`
          SELECT e.*, p.address AS property_address
          FROM Expenses e
          JOIN Properties p ON e.property_id = p.id
        `);
        res.status(200).json(rows);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
      break;

    case 'POST':
      try {
        const { property_id, expense_date, description, amount } = req.body;
        const query = `
          INSERT INTO Expenses (property_id, expense_date, description, amount)
          VALUES ($1, $2, $3, $4) RETURNING *
        `;
        const values = [property_id, expense_date, description, amount];
        const { rows } = await pool.query(query, values);
        res.status(201).json(rows[0]);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
      break;

    case 'PUT':
      try {
        const { id, property_id, expense_date, description, amount } = req.body;
        const query = `
          UPDATE Expenses
          SET property_id = $1, expense_date = $2, description = $3, amount = $4
          WHERE id = $5 RETURNING *
        `;
        const values = [property_id, expense_date, description, amount, id];
        const { rows } = await pool.query(query, values);
        res.status(200).json(rows[0]);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
      break;

    case 'DELETE':
      try {
        const { id } = req.body;
        const query = 'DELETE FROM Expenses WHERE id = $1';
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
