import { sql } from '@vercel/postgres';

export default async function createDatabase(){
try{
//  const responseTenants = await sql`CREATE TABLE Tenants (
//     id SERIAL PRIMARY KEY,        -- Unique tenant ID (auto-increment)
//     name VARCHAR(255) NOT NULL,   -- Tenant's name
//     contact VARCHAR(255),         -- Contact information (e.g., phone or email)
//     dob DATE                      -- Date of birth
// );`

// const responseProperties = await sql`CREATE TABLE Properties (
//     id SERIAL PRIMARY KEY,            -- Unique property ID (auto-increment)
//     address VARCHAR(255) NOT NULL,    -- Property address
//     type VARCHAR(50),                 -- Property type (e.g., apartment complex, house)
//     size_sqft INTEGER,                -- Property size in square feet
//     total_units INTEGER               -- Number of units within the property
// );`

// const responseUnits = await sql`CREATE TABLE Units (
//     id SERIAL PRIMARY KEY,            -- Unique unit ID (auto-increment)
//     property_id INT NOT NULL,         -- Foreign key to Properties table
//     unit_number VARCHAR(50) NOT NULL, -- Unit number or identifier (e.g., Apt 101, Room B)
//     size_sqft INTEGER,                -- Size of the unit in square feet
//     rent_amount DECIMAL(10, 2),       -- Rent amount specific to the unit
//     occupied BOOLEAN DEFAULT FALSE,   -- Whether the unit is currently occupied
//     FOREIGN KEY (property_id) REFERENCES Properties(id) ON DELETE CASCADE
// );`


// const responseLeases = await sql`CREATE TABLE Leases (
//     id SERIAL PRIMARY KEY,            -- Unique lease ID (auto-increment)
//     tenant_id INT NOT NULL,           -- Foreign key to Tenants table
//     unit_id INT NOT NULL,             -- Foreign key to Units table
//     start_date DATE NOT NULL,         -- Lease start date
//     end_date DATE NOT NULL,           -- Lease end date
//     rent_amount DECIMAL(10, 2),       -- Monthly rent amount
//     FOREIGN KEY (tenant_id) REFERENCES Tenants(id),
//     FOREIGN KEY (unit_id) REFERENCES Units(id)
// );`


// const responsePayments = await  sql`CREATE TABLE Payments (
//     id SERIAL PRIMARY KEY,            -- Unique payment ID (auto-increment)
//     lease_id INT NOT NULL,            -- Foreign key to Leases table
//     payment_date DATE NOT NULL,       -- Payment date
//     amount DECIMAL(10, 2) NOT NULL,   -- Payment amount
//     FOREIGN KEY (lease_id) REFERENCES Leases(id)
// );`

const responseWorkOrder = await sql`CREATE TABLE WorkOrders (
    id SERIAL PRIMARY KEY,            -- Unique work order ID (auto-increment)
    property_id INT NOT NULL,         -- Foreign key to Properties table
    contractor_id INT,                -- Foreign key to Contractors table (nullable)
    request_date DATE NOT NULL,       -- Date when the work order was requested
    description TEXT NOT NULL,        -- Description of the issue or service request
    status VARCHAR(50),               -- Status of the work order (e.g., open, in-progress, completed)
    FOREIGN KEY (property_id) REFERENCES Properties(id),
    FOREIGN KEY (contractor_id) REFERENCES Contractors(id)
);`
// const responseContractors = await sql`CREATE TABLE Contractors (
//     id SERIAL PRIMARY KEY,            -- Unique contractor ID (auto-increment)
//     name VARCHAR(255) NOT NULL,       -- Contractor's name
//     contact VARCHAR(255),             -- Contact information
//     specialty VARCHAR(255)            -- Contractor's specialty (e.g., plumbing, electrical)
// );`

const responseExpenses = await sql`CREATE TABLE Expenses (
    id SERIAL PRIMARY KEY,            -- Unique expense ID (auto-increment)
    property_id INT NOT NULL,         -- Foreign key to Properties table
    expense_date DATE NOT NULL,       -- Date of the expense
    description TEXT NOT NULL,        -- Description of the expense
    amount DECIMAL(10, 2) NOT NULL,   -- Expense amount
    FOREIGN KEY (property_id) REFERENCES Properties(id)
);`

// --  Index on the address to speed up property lookups by address
const Index1 =await sql `CREATE INDEX idx_properties_address ON Properties(address);`

// --  Index on property_id for fast JOIN between Properties and Units
const Index2 =await sql `CREATE INDEX idx_units_property_id ON Units(property_id);`

// --  Index on unit_number for fast lookup by unit number
const Index3 =await sql `CREATE INDEX idx_units_unit_number ON Units(unit_number);`

// --  Index on occupied to quickly find vacant or occupied units
const Index4 =await sql `CREATE INDEX idx_units_occupied ON Units(occupied);`

// --  Index on tenant_id for JOIN operations between Leases and Tenants
const Index5 = await sql `CREATE INDEX idx_leases_tenant_id ON Leases(tenant_id);`

// --  Index on unit_id for JOIN operations between Leases and Units
const Index6 = await sql `CREATE INDEX idx_leases_unit_id ON Leases(unit_id);`

// --  Index on start_date and end_date to optimize date range queries
 const Index7 = await sql `CREATE INDEX idx_leases_start_date ON Leases(start_date);`
 const Index8 = await sql `CREATE INDEX idx_leases_end_date ON Leases(end_date);`

// --  Index on lease_id for JOIN operations between Payments and Leases
const Index9 = await sql `CREATE INDEX idx_payments_lease_id ON Payments(lease_id);`

// --  Index on payment_date to optimize queries related to payment history
const Index10 = await sql `CREATE INDEX idx_payments_payment_date ON Payments(payment_date);`

// --  Index on property_id for JOIN operations between WorkOrders and Properties
const Index11 = await sql `CREATE INDEX idx_work_orders_property_id ON WorkOrders(property_id);`

// --  Index on contractor_id for JOIN operations between WorkOrders and Contractors
const Index12 = await sql `CREATE INDEX idx_work_orders_contractor_id ON WorkOrders(contractor_id);`

// --  Index on status to quickly filter work orders by their current status
const Index13 = await sql `CREATE INDEX idx_work_orders_status ON WorkOrders(status);`

// --  Index on name for quick lookup by contractor's name
const Index14 = await sql `CREATE INDEX idx_contractors_name ON Contractors(name);`

// --  Index on specialty for filtering by contractor's specialty
const Index15 = await sql `CREATE INDEX idx_contractors_specialty ON Contractors(specialty);`

// --  Index on property_id for JOIN operations between Expenses and Properties
const Index16 =await sql `CREATE INDEX idx_expenses_property_id ON Expenses(property_id);`

// --  Index on expense_date for fast filtering by date
const Index17 =await sql `CREATE INDEX idx_expenses_expense_date ON Expenses(expense_date);`

const data = await Promise.all([   responseWorkOrder, responseExpenses, Index1, Index2, Index3, Index4, Index5, Index6, Index7, Index8, Index9, Index10, Index11, Index12, Index13, Index14, Index15, Index16, Index17])

console.log(data)
}  
catch(err){
    console.log(err)
}
}