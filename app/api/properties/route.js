// api/properties.js
import { NextResponse } from 'next/server';
import pool from '../../../lib/db/db';



  
    export const GET= async (req, res) => {
      try {
        const { rows } = await pool.query('SELECT * FROM Properties');
        return NextResponse.json({rows},{status:200})
      } catch (error) {
        return NextResponse.error({ message: error.message },{status:500})
      }
      };

    export const POST= async (req, res) => {
      try {
        const { address, type, size_sqft, total_units } =  await req.json();
        const query = 'INSERT INTO Properties (address, type, size_sqft, total_units) VALUES ($1, $2, $3, $4) RETURNING *';
        const values = [address, type, size_sqft, total_units];
        const { rows } = await pool.query(query, values)
        const response = rows[0]
        return NextResponse.json(rows[0],{status:201});
      } catch (error) {
        return NextResponse.error({ message: error.message }, {status:500});
      }
      }

    export const PUT= async (req, res) => {
      try {
        const { id, address, type, size_sqft, total_units } = req.body;
        const query = 'UPDATE Properties SET address = $1, type = $2, size_sqft = $3, total_units = $4 WHERE id = $5 RETURNING *';
        const values = [address, type, size_sqft, total_units, id];
        const { rows } = await pool.query(query, values);
        return NextResponse.json(rows[0],{status:200})
      } catch (error) {
        return NextResponse.error({ message: error.message },{status:500})
      }
      };

    export const DELETE= async (req, res) => {
      try {
        const { id } = req.body;
        const query = 'DELETE FROM Properties WHERE id = $1';
        await pool.query(query, [id]);
        return NextResponse.json({status:204})
      } catch (error) {
        return NextResponse.json({ message: error.message },{status:500})
      }
      };

    

