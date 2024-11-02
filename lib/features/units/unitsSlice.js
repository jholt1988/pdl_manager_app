import { createAppSlice } from '@/lib/createAppSlice';
import { STATUS } from '../../utils';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  list: [], 
  status: STATUS.idle, // e.g., 'idle'
  error: null,
};

// Unit Slice
const unitSlice = createAppSlice({
  name: 'units',
  initialState,
  reducers: (create) => ({
    addUnit: create.asyncThunk(
      async (data, thunkAPI) => {
        try {
          const response = await axios.post('/api/units',data);
          return response.data;
        } catch (error) {
            return console.error(error.response.data);
        }
      },
      {
        pending: (state) => {
          state.status = STATUS.LOADING; // e.g., 'loading'
        },
        rejected: (state, action) => {
          state.status = STATUS.FAILDED; // e.g., 'failed'
          state.error = action.payload ?? action.error;
        },
        fulfilled: (state, action) => {
          state.status = STATUS.SUCCESS; // e.g., 'succeeded'
          state.list.push(action.payload);
        },
        settled: (state) => {
          state.status = STATUS.IDLE; // e.g., 'idle'
        },
      }
    ),
    removeUnit: (state, action) => {
      state.list = state.list.filter(unit => unit.id !== action.payload);
    },
    updateUnit: (state, action) => {
      const index = state.list.findIndex(unit => unit.id === action.payload.id);
      if (index !== -1) {
        state.list[index] = action.payload;
      }
    },
    fetchUnits: create.asyncThunk(
      async (propertyId, thunkAPI) => {
        console.log(propertyId)
        try {
          const response = await axios.get(`/api/units?property_id=${propertyId}`);
          return response.data;
        } catch (error) {
          return error.response.data
        }
      },
      {
        pending: (state) => {
          state.status = STATUS.LOADING; // 'loading'
        },
        rejected: (state, action) => {
          state.status = STATUS.FAILDED; // 'failed'
          state.error = action.payload ?? action.error;
        },
        fulfilled: (state, action) => {
          state.status = STATUS.SUCCESS; // 'succeeded'
          state.list = action.payload;
        },
        settled: (state) => {
          state.status = STATUS.IDLE; // 'idle'
        },
      }
    ),
  }),
});

export const { addUnit, removeUnit, updateUnit, fetchUnits } = unitSlice.actions;
export default unitSlice.reducer;
