import {createSlice} from '@reduxjs/toolkit';

export const DataReducer = createSlice({
  name: `records`,
  initialState: {
    data: [],
    totalRecords: 0,
    product: '',
  },
  reducers: {
    Action_SetRecords: (state, action) => {
      state.data = state.data.concat(action.payload.products);
      state.totalRecords = action.payload.total;
    },
    Action_SetProduct: (state, action) => {
      state.product = action.payload;
    },
  },
});
export const {Action_SetRecords, Action_SetProduct} = DataReducer.actions;
export default DataReducer.reducer;
