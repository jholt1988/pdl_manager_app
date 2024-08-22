import React from 'react';
import DatePicker from '@mui/x-date-pickers';

export default function Dateinput (props) {
    return (
        <>
          <DatePicker value={props.value} onChange={props.handleDateChange} />
        </>
    )
}