// pages/api/tenants.js
import { sql } from "@vercel/postgres";



export default function handler(req, res) {


  const { method } = req;

function fetchAllTenants () {
  res.status(200).json(tenants)
}



  switch (method) {
    case 'GET':
      // Return the list of tenants
      res.status(200).json(tenants);
      break;

    case 'POST':
      // Add a new tenantv
      const newTenant = req.body;
      tenants.push({ ...newTenant, id: Date.now() }); // Add a unique ID for the tenant
      res.status(201).json(newTenant);
      break;

    case 'PUT':
      // Update an existing tenant
      const updatedTenant = req.body;
      tenants = tenants.map((tenant) =>
        tenant.id === updatedTenant.id ? updatedTenant : tenant
      );
      res.status(200).json(updatedTenant);
      break;

    case 'DELETE':
      // Remove a tenant
      const { id } = req.body;
      tenants = tenants.filter((tenant) => tenant.id !== id);
      res.status(204).end();
      break;

    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}

