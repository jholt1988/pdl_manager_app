import React from "react";
import AddPaymentForm from "../../components/payments/addPaymentForm";
import Box from '@mui/material/Box';


export default  async function AddPaymentPage({params}){
  const leaseid = await  params ;
  
    return(
        <>{ params?
        <Box>
          <AddPaymentForm leaseId={leaseid}/>
        </Box>
          : <Box>
            <AddPaymentForm />
          </Box>   }
        </>
    )
}