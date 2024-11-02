// api/properties.js
import pool from '../../../lib/db/db';
import { NextResponse } from 'next/server';




  
    export const GET= async (req, res) => {
      const client = await pool.connect()
      try {
        const { rows } = await client.query('SELECT * FROM Properties');
  
        return  Response.json(rows)
      } catch (error) {
        return NextResponse.error(  error.message ,{status:500})
      }
      };

    export const POST= async (req, res) => {
      const client = pool.connect()
    try{
        const { address, type, size_sqft, total_units } = await req.json();
        const query = 'INSERT INTO properties (address, type, size_sqft, total_units) VALUES ($1, $2, $3, $4) RETURNING *';
        const values = [address, type, size_sqft, total_units];
        const { rows } = await  (await client).query(query, values);
         
       return Response.json(rows[0])
     
      } catch (err){
        return Response.json(err)
      }
    }
    export const PUT= async (req, res) => {
      try {
        const { id, address, type, size_sqft, total_units } = req.body;
        const query = 'UPDATE properties SET address = $1, type = $2, size_sqft = $3, total_units = $4 WHERE id = $5 RETURNING *';
        const values = [address, type, size_sqft, total_units, id];
        const { rows } = await pool.query(query, values);
        return NextResponse.json(rows[0],{status:200})
      } catch (error) {
        return NextResponse.json( error.message ,{status:500})
      }
      };

    export const DELETE= async (req, res) => {
      try {
        const { id } = req.body;
        const query = 'DELETE FROM properties WHERE id = $1';
        await pool.query(query, [id]);
        return NextResponse.json({status:204})
      } catch (error) {
        return NextResponse.json({ message: error.message },{status:500})
      }
      };

    

