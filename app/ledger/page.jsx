import React from "react";
import AddTransactionForm from "../components/ledger/addtransactionform";
import Ledger from "../components/ledger/ledger";

export default function LedgerPage(){
    return(
        <>
        <Ledger />
        <AddTransactionForm />
        </>
    )
}