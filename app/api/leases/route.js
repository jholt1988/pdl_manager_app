// pages/api/leases.js
import pool from '../../../lib/db/db';


  
    export async function GET(req, res){
      const client = pool.connect()
            try {
        const { rows } = await (await client).query(`
          SELECT l.*, t.name AS tenant_name, p.address AS property_address
          FROM Leases l
          JOIN Tenants t ON l.tenant_id = t.id
          JOIN Properties p ON l.property_address = p.address
        `);
       return Response.json(rows, {status:200})
      } catch (error) {
        return Response.json(error.message, {status:500})
      }
    }

    export async function POST(req, res){
      const client = pool.connect()
      try {
        const { tenant_id, unit_id, start_date, end_date, rent_amount,property_address, utilities, pet_deposit } = await req.json();
        const query = 'INSERT INTO Leases (tenant_id, unit_id, start_date, end_date, rent_amount,property_address, utilities, pet_deposit) VALUES ($1, $2, $3, $4, $5, $6,$7, $8) RETURNING *';
        const values = [tenant_id, unit_id, start_date, end_date, rent_amount, property_address, utilities, pet_deposit];
        const { rows } = await (await client).query(query, values);
      return Response.json(rows[0], {status:201})
      } catch (err) {
        return Response.json(err.message, {status:500})
      }
    }

    export async function PUT(req, res){
      const client = pool.connect()
      try {
        const { id, tenant_id, unit_id, property_address, start_date, end_date, rent_amount } = await req.json();
        const query = 'UPDATE Leases SET tenant_id = $1, unit_id = $2, start_date = $3, end_date = $4, rent_amount = $5, property_address=$6 WHERE id = $7 RETURNING *';
        const values = [tenant_id,unit_id , start_date, end_date, rent_amount,property_address, id];
        const { rows } = await client.query(query, values);
        return Response.json(rows[0], {status:200})
      } catch (error) {
        return Response.error()
      }
    }

    export async function DELETE(req, res){
      const client = pool.connect()
      try {
        const { id } = req.body;
        const query = 'DELETE FROM Leases WHERE id = $1';
        await client.query(query, [id]);
         return Response.json(null, {status:204})
      } catch (error) {
        return Response.error()
      }
    }

   
