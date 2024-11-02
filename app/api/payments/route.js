// pages/api/payments.js
import { NextResponse } from 'next/server';
import pool, {query} from '../../../lib/db/db';

 
 
    export async function GET (req, res){
      try {
        const { rows } = await query(`
          SELECT p.*, l.rent_amount, t.name AS tenant_name
          FROM payments p
          JOIN leases l ON p.lease_id = l.id
          JOIN tenants t ON l.tenant_id = t.id
        `);
       return NextResponse.json(rows, {status:200});
      } catch (error) {
       return NextResponse.json({message:error.message}, {status:500})
      }
    }

    export async function POST (req, res){
      try {
        const { lease_id, payment_date, amount } = req.body;
        const query = 'INSERT INTO payments (lease_id, payment_date, amount) VALUES ($1, $2, $3) RETURNING *;';
        const values = [lease_id, payment_date, amount];
        const { rows } = await query(query, values);
       return   NextResponse.json(rows)
      } catch (error) {
      return  NextResponse.error({message:error.message }, {status: 500});
      }
    }

    export async function DELETE (req, res){
      try {
        const { id } = req.body;
        const query = 'DELETE FROM Payments WHERE id = $1';
        await pool.query(query, [id]);
        res.status(204).end();
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    }

    

