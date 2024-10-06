import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {fetchLeases, removeLease} from '../../../lib/features/leases/leaseSlice'
import ReusableDataGrid from '../basic/datagrid/ReusableDataGrid';

export default function Leaselist (props) {
  const dispatch = useDispatch()
  const {leases, status, error} = useSelector((state) => state.lease)
  const columns = ['Id', "Property", "Unit", "Rent", "Tenant"]

  useEffect(() => {
    if(status === 'idle'){
      dispatch(fetchLeases())
    }
  }, [status, dispatch])

  if(status === 'loading') return <p>Loading...</p>
  if(status === 'failed') return <p>Error:{error}</p>
  

    return (
        <>
           <ReusableDataGrid columns={columns} rows={leases} />
        </>
    )
}