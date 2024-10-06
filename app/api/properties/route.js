// api/properties/route.js

let properties = []; // Mock database for leases

export default function handler(req, res) {
  const { method } = req;

  switch (method) {
    case 'GET':
      // Return the list of leases
      res.status(200).json(properties);
      break;

    case 'POST':
      // Add a new lease
      const newProperty = req.body;
      properties.push({ ...newProperty, id: Date.now() });
      res.status(201).json(newProperty);
      break;

    case 'PUT':
      // Update an existing lease
      const updatedProperty = req.body;
      properties = properties.map((property) =>
        property.id === updatedProperty.id ? updatedProperty : lease
      );
      res.status(200).json(updatedProperty);
      break;

    case 'DELETE':
      // Delete a lease
      const { id } = req.body;
      properties = properties.filter((property) => property.id !== id);
      res.status(204).end();
      break;

    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
