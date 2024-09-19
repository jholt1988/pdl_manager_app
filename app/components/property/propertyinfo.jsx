import React from 'react';
import { useSelector } from 'react-redux';
import { Paper, Box } from '@mui/material';

 export default function PropertyInfo(props) {
    const property = useSelector((state) => state.properties.selectedProperty)
      console.log(property)
    if (!property) {
        return <p>property not found.</p>;
      }
  return (
    <>
      <Box className={props.className} hidden={props.hidden}>
        <Paper>
          <div>
            <h2>Property Information</h2>
            <p>
              <strong>Property:</strong> {`${property.property_name}`}
            </p>
            <p>
              <strong>Address:</strong> {`${property.address}`}
            </p>
            <p>
              <strong>Square Feet:</strong> {`${property.square_footage}`}
            </p>
            <p>
              <strong>Units</strong> {`${property.units}`}
            </p>
            <p>
              <strong>Property Type:</strong> {`${property.property_type}`}
            </p>
            <p>
              <strong>Status:</strong> {`${property.status}`}
            </p>
            

          </div>
        </Paper>
      </Box>
        </>
    )
}