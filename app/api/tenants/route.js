// /api/tenants.js
import pool from '../../../lib/db/db';
import { NextResponse } from 'next/server';

const handleRequest = (handlers) => async (req, res) => {
  const handler = handlers[req.method];
  if (handler) {
    return handler(req, res);
  } else {
    return NextResponse.error(`Method ${req.method} Not Allowed`,{status:405 });
  }
};
  
    export const GET = async (req, res) =>{
      try {
        const { rows } = await pool.query('SELECT * FROM Tenants');
        return NextResponse.json({rows}, {status:200});
      } catch (error) {
      return  NextResponse.error({ message: error.message }, {status:500});
      }
    }
      

    export const POST = async (req, res) => {
      try {
        const { name, contact, dob } = await req.json();
        const query = 'INSERT INTO Tenants (name, contact, dob) VALUES ($1, $2, $3) RETURNING *';
        const values = [name, contact, dob];
        const { rows } = await pool.query(query, values);
       return NextResponse.json(rows[0], {status:201});
      } catch (error) {
        return NextResponse.error({ message: error.message }, {status:500});
      }
    }

    export const PUT = async (req, res) => {
      try {
        const { id, name, contact, dob } = req.body;
        const query = 'UPDATE Tenants SET name = $1, contact = $2, dob = $3 WHERE id = $4 RETURNING *';
        const values = [name, contact, dob, id];
        const { rows } = await pool.query(query, values);
       return  NextResponse.json(rows[0], {status:200});
      } catch (error) {
       return NextResponse.error({ message: error.message }, {status:500});
      }
    }

    export const DELETE = async(req, res) => {
      try {
        const { id } = req.body;
        const query = 'DELETE FROM Tenants WHERE id = $1';
        await pool.query(query, [id]);
       return NextResponse.json({status: 204})
      } catch (error) {
        return NextResponse.error({ message: error.message }, {status:500});

    }

  }
  



