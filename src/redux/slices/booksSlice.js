import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchBooks = createAsyncThunk('Books/fetchBooksStatus', async ( thunkAPI) => {
    const { data } = await axios.get
    ('https://624c63b1d71863d7a80997bc.mockapi.io/movies/');
    return data;
  });
  
  const initialState = {
    items: [],
    status: 'loading', // loading | success | error
  };
  
  const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
      setItems(state, action) {
        state.items = action.payload;
      },
    },
    extraReducers: {
      [fetchBooks.pending]: (state) => {
        state.status = 'loading';
        state.items = [];
      },
      [fetchBooks.fulfilled]: (state, action) => {
        console.log(action, 'fulfilled');
        state.items = action.payload;
        state.status = 'success';
      },
      [fetchBooks.rejected]: (state, action) => {
        console.log(action, 'rejected');
        state.status = 'error';
        state.items = [];
      },
    },
  });
  
  export const selectBooksData = (state) => state.books;
  
  export const { setItems } = booksSlice.actions;
  
  export default booksSlice.reducer;
  