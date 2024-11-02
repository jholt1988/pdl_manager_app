import pool from '../../../lib/db/db';

// GET: Fetch all units or units for a specific property
export async function GET(req, res) {
  const property_id =  req.query;
  const client = pool.connect()
  try {
    let units;
    if (property_id) {
      const { rows } = await (await client).query(
        'SELECT * FROM units WHERE property_id = $1', 
        [property_id]
      );
      units = rows;
    } else {
      const { rows } =  await (await client).query('SELECT * FROM Units');
      units = rows;
    }
    return Response.json(units)
  } catch (error) {
    return Response.json(error.message)
  }
}

// POST: Create a new unit
export async function POST(req, res) {
    const client = pool.connect()
  try {
    const { property_id, unit_number, size_sqft, rent_amount, status } = await req.json();
    const query = `
      INSERT INTO Units (property_id, unit_number, size_sqft, rent_amount, status) 
      VALUES ($1, $2, $3, $4, $5) RETURNING *`;
    const values = [property_id, unit_number, size_sqft, rent_amount, status];
    const { rows } = await (await client).query(query, values);
  return  Response.json(rows[0], {status:201})
  } catch (error) {
   return  Response.json(error.message, {status:500})
  }
}

// PUT: Update an existing unit
export async function UPDATE(req, res) {
    const client = pool.connect()
  try {
    const { id, unit_number, size_sqft, rent_amount, status } = req.body;
    const query = `
      UPDATE Units SET unit_number = $1, size_sqft = $2, rent_amount = $3, status = $4 
      WHERE id = $5 RETURNING *`;
    const values = [unit_number, size_sqft, rent_amount, status, id];
    const { rows } = await (await client).query(query, values);
   return Response.json(row[0], {status:200})
  } catch (error) {
       return Response.json(error.message)
  }
}

// DELETE: Delete a unit
export async function DELETE(req, res) {
    const client = pool.connect()
  try {
    const { id } = req.body;
    await (await client).query('DELETE FROM Units WHERE id = $1', [id]);
return Response.json(null, {status:204})
  } catch (error) {
    return Response.json(error.mewsage)
    
  }
}

// Unified handler that dispatches to the correct method based on the HTTP request
export  async function handler(req, res) {
  switch (req.method) {
    case 'GET':
      return getUnits(req, res);
    case 'POST':
      return createUnit(req, res);
    case 'PUT':
      return updateUnit(req, res);
    case 'DELETE':
      return deleteUnit(req, res);
    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
