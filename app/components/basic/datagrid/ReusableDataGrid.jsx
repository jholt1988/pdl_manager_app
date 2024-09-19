
import React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';





export default function ReusableDataGrid(props) {
    const {rows, columns, getRowId} = props
    return (
      <Box sx={{ height: 400, width: 'fit-content' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            }
          }}
          getRowId={getRowId}
          pageSizeOptions={[5, 10, 15, 20]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    );
  }