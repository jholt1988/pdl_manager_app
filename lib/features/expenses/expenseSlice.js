import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  transactions: [], // { id, type: 'income' | 'expense', amount, description, date }
  totalIncome: 0,
  totalExpenses: 0,
};

const expensesSlice = createSlice({
  name: 'expenses',
  initialState,
  reducers: {
    addTransaction: (state, action) => {
      const transaction = action.payload;
      state.transactions.push(transaction);
      if (transaction.type === 'income') {
        state.totalIncome += transaction.amount;
      } else if (transaction.type === 'expense') {
        state.totalExpenses += transaction.amount;
      }
    },
    deleteTransaction: (state, action) => {
      const id = action.payload;
      const transactionIndex = state.transactions.findIndex(t => t.id === id);
      if (transactionIndex >= 0) {
        const transaction = state.transactions[transactionIndex];
        if (transaction.type === 'income') {
          state.totalIncome -= transaction.amount;
        } else if (transaction.type === 'expense') {
          state.totalExpenses -= transaction.amount;
        }
        state.transactions.splice(transactionIndex, 1);
      }
    },
  },
});

export const { addTransaction, deleteTransaction } = expensesSlice.actions;
export default expensesSlice.reducer;