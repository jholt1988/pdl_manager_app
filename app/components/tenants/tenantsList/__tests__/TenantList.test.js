import React from 'react';
import { render } from '@testing-library/react';
import TenantList from '../TenantList';
import ReusableDataGrid from '../../basic/datagrid/ReusableDataGrid';

// Mock the ReusableDataGrid component
jest.mock('../../basic/datagrid/ReusableDataGrid', () => {
    return jest.fn(() => <div>Mocked ReusableDataGrid</div>);
});

describe('TenantList Component', () => {
    it('should render correctly with given tenants', () => {
        const tenants = [
            { id: 1, Name: 'John Doe', Phone: '123-456-7890', Email: 'john@example.com', Property: 'Property 1', 'Lease Start': '2023-01-01', 'Lease End': '2023-12-31', 'Monthy Rent': '$1000', Balance: '$0' },
            { id: 2, Name: 'Jane Smith', Phone: '098-765-4321', Email: 'jane@example.com', Property: 'Property 2', 'Lease Start': '2023-02-01', 'Lease End': '2023-11-30', 'Monthy Rent': '$1200', Balance: '$200' },
        ];

        const { getByText } = render(<TenantList tenants={tenants} />);

        // Ensure that the mocked ReusableDataGrid is rendered
        expect(ReusableDataGrid).toHaveBeenCalledWith(
            expect.objectContaining({
                rows: tenants,
                columns: [
                    'Name', 'Phone', 'Email', 'Property', 
                    'Lease Start', 'Lease End', 'Monthy Rent', 'Balance'
                ]
            }),
            {}
        );

        // Ensure that the ReusableDataGrid component was called with the correct props
        expect(getByText('Mocked ReusableDataGrid')).toBeInTheDocument();
    });

    it('should handle empty tenants list', () => {
        const tenants = [];

        const { getByText } = render(<TenantList tenants={tenants} />);

        // Ensure that the mocked ReusableDataGrid is rendered even with an empty list
        expect(ReusableDataGrid).toHaveBeenCalledWith(
            expect.objectContaining({
                rows: tenants,
                columns: [
                    'Name', 'Phone', 'Email', 'Property', 
                    'Lease Start', 'Lease End', 'Monthy Rent', 'Balance'
                ]
            }),
            {}
        );

        expect(getByText('Mocked ReusableDataGrid')).toBeInTheDocument();
    });
});
