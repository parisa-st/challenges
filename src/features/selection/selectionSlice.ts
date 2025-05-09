import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Product {
  id: number;
  title: string;
  image: string;
}

interface SelectionState {
  selected: Product[];
}

const initialState: SelectionState = {
  selected: [],
};

const selectionSlice = createSlice({
  name: 'selection',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Product>) => {
      if (!state.selected.some((item) => item.id === action.payload.id)) {
        state.selected.push(action.payload);
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.selected = state.selected.filter((item) => item.id !== action.payload);
    },
  },
});

export const { add, remove } = selectionSlice.actions;
export default selectionSlice.reducer;