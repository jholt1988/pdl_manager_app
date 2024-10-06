import { sql } from '@vercel/postgres';
import {NextResponse} from 'next/server';
import {v4} from 'uuid'
export async function POST(req, res){
   const {name, email, phone} = req.body
  const id = v4()

    try{
        await sql`INSERT INTO Tenants(id, Name, Phone, Email) VALUES(${id}, ${name}, ${phone}, ${email});`;
    } catch(error){
        return NextResponse.json({ error }, { status: 500 });
    }

    const tenants = await sql`SELECT * FROM Tenants;`;
    return NextResponse.json({tenants}, {status:200})
}