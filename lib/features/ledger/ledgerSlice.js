import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tenants: {},
};

const ledgerSlice = createSlice({
  name: 'ledger',
  initialState,
  reducers: {
    addTransaction: (state, action) => {
      const { tenantId, transaction } = action.payload;
      if (!state.tenants[tenantId]) {
        state.tenants[tenantId] = { transactions: [], balance: 0 };
      }
      state.tenants[tenantId].transactions.push(transaction);
      state.tenants[tenantId].balance += transaction.amount;
    },
    deleteTransaction: (state, action) => {
      const { tenantId, transactionId } = action.payload;
      const tenantLedger = state.tenants[tenantId];
      if (tenantLedger) {
        const transaction = tenantLedger.transactions.find((t) => t.id === transactionId);
        if (transaction) {
          tenantLedger.balance -= transaction.amount;
          tenantLedger.transactions = tenantLedger.transactions.filter((t) => t.id !== transactionId);
        }
      }
    },
    updateTransaction: (state, action) => {
      const { tenantId, transaction } = action.payload;
      const tenantLedger = state.tenants[tenantId];
      if (tenantLedger) {
        const index = tenantLedger.transactions.findIndex((t) => t.id === transaction.id);
        if (index !== -1) {
          const oldAmount = tenantLedger.transactions[index].amount;
          tenantLedger.transactions[index] = transaction;
          tenantLedger.balance += transaction.amount - oldAmount;
        }
      }
    },
  },
});

export const { addTransaction, deleteTransaction, updateTransaction } = ledgerSlice.actions;

export default ledgerSlice.reducer;
