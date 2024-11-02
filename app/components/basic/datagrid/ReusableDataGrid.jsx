
import React,{useEffect}from 'react';
import Box from '@mui/material/Box';
import { DataGrid, useGridApiRef } from '@mui/x-data-grid';






export default function ReusableDataGrid(props) {
    const {rows, columns, getRowId, onRowClick} = props
    const apiRef = useGridApiRef()
    useEffect(() => {
      
      
    
  
      // The `subscribeEvent` method will automatically unsubscribe in the cleanup function of the `useEffect`.
      return apiRef.current.subscribeEvent('rowClick', onRowClick);
    }, []);;

    return (
      <Box sx={{ height: 400, width: 'fit-content' }}>
        <DataGrid
          rows={rows}
          apiRef={apiRef}
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
          
         
        />
      </Box>
    );
  }