// lib/db.js
import  Pool  from 'pg-pool';




  const pool = new Pool({
    connectionString: process.env.POSTGRES_URL,
    ssl: {
      rejectUnauthorized: true,
      
    },
  })
  pool.on('error', (err, client) => {
    console.error('Unexpected error on idle client', err)
    process.exit(-1)
  })



export default pool;


export const query = (text, values) => {
  console.log('query:',text, values)
  return pool.query(text, values)
}