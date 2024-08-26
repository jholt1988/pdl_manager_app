import React from 'react';
import { render, screen } from '@testing-library/react';
//import '@testing-library/jest-dom/extend-expect'; // for additional matchers like 'toBeInTheDocument'
import ReusableDataGrid from '../ReusableDataGrid.jsx'; // adjust the import path as needed

// Mock data for testing
const mockRows = [
    { id: 1, col1: 'Hello', col2: 'World' },
    { id: 2, col1: 'DataGrid', col2: 'Test' },

];

const mockColumns = [
    { field: 'col1', headerName: 'Column 1', width: 150 },
    { field: 'col2', headerName: 'Column 2', width: 150 },
];

describe('ReusableDataGrid Component', () => {
    test('renders without crashing', () => {
        render(<ReusableDataGrid rows={mockRows} columns={mockColumns} />);
        // Check if the DataGrid is rendered
        expect(screen.getByRole('grid')).toBeInTheDocument();
    });

    test('displays the correct number of rows', () => {
        render(<ReusableDataGrid rows={mockRows} columns={mockColumns} />);
        // Check if the number of rows rendered matches the length of mockRows
        expect(screen.getAllByRole('row')).toHaveLength(mockRows.length + 1); // +1 for the header row
    });

    test('renders the correct column headers', () => {
        render(<ReusableDataGrid rows={mockRows} columns={mockColumns} />);
        // Check if the correct column headers are displayed
        expect(screen.getByText('Column 1')).toBeInTheDocument();
        expect(screen.getByText('Column 2')).toBeInTheDocument();
    });

    
});
