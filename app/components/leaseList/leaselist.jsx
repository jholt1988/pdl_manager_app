'use client'
import React, {useEffect} from 'react';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import {fetchLeases, removeLease} from '../../../lib/features/leases/leaseSlice'
import ReusableDataGrid from '../basic/datagrid/ReusableDataGrid';

export default function Leaselist (props) {
  const dispatch = useAppDispatch()
  const {leases, status, error} = useAppSelector((state) => state.leases)
  const columns = [{field:'id', headerName:'Id'}, {field:"property_address",headerName:'Property' },{ field:"unit", headerName:"Unit"},{field:"rent_amount", headerName:"Rent"}, {field:"tenant_name", headerName:"Tenant"}, {field:"start_date", headerName:'Start Date'}, {field:"end_date", headerName:'End Date'},{field:"utilities", headerName:'Utilites'}, {field:"deposit", headerName:'Deposit'}, {field:"pet_deposit", headerName:"Pet Deposit"}]

  useEffect(() => {
  
      dispatch(fetchLeases())
    
  }, [])

  if(status === 'LOADING') return <p>Loading...</p>
  if(status === 'FAILED') return <p>Error:{error}</p>

 



  

    return (
        <>
           <ReusableDataGrid columns={columns} rows={leases} />
        </>
    )
}