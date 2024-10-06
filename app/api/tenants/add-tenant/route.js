import { sql } from '@vercel/postgres';
import {NextResponse, NextRequest} from 'next/server';
import {v4} from 'uuid'
export async function POST(req, res){
    
  const {name, phone, email} = await req.json()
    console.log(name)
  
  
  const id = v4()

    try{
       await sql`INSERT INTO Tenants(id, name, phone, email) VALUES(${id}, ${name}, ${phone}, ${email});`
       
           
       return  NextResponse.json({name, phone, email}, {status:200})
         
    } catch(error){
        return NextResponse.json({ error }, { status: 500 });
    
    }
 
}