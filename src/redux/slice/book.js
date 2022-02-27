import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import clients, { thunkHandler } from "../../service/api";

import { toast } from "react-toastify";

const initialState = {
  status: "idle",
  books: null,
  singleBook: null,
};

export const getBook = createAsyncThunk("books/getBook", (_, thunkAPI) => {
  const response = thunkHandler(
    clients.default.client({
      method: "GET",
      url: "/book",
    }),
    thunkAPI
  );
  return response;
});

export const getBookByid = createAsyncThunk(
  "books/getBookByid",
  ({ id }, thunkAPI) => {
    const response = thunkHandler(
      clients.default.client({
        method: "GET",
        url: `/book/${id}`,
      }),
      thunkAPI
    );
    return response;
  }
);

export const updateBook = createAsyncThunk(
  "books/updateBook",
  ({ data }, thunkAPI) => {
    const response = thunkHandler(
      clients.default.client({
        method: "PUT",
        url: `/book/${data.id}`,
        data,
      }),
      thunkAPI
    );
    return response;
  }
);

export const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers: {
    [getBook.pending]: (state) => {
      state.status = "loading";
    },
    [getBook.fulfilled]: (state, action) => {
      const actionState = action.payload.data;
      state.status = "succeeded";
      state.books = actionState;
    },
    [getBook.rejected]: (state, action) => {
      state.status = "failed";
      toast.error(action.payload.data.message);
    },
    [getBookByid.pending]: (state) => {
      state.status = "loading";
    },
    [getBookByid.fulfilled]: (state, action) => {
      const actionState = action.payload.data;
      state.status = "succeeded";
      state.singleBook = actionState;
    },
    [getBookByid.rejected]: (state, action) => {
      state.status = "failed";
      toast.error(action.payload.data.message);
    },
    [updateBook.pending]: (state) => {
      state.status = "loading";
    },
    [updateBook.fulfilled]: (state) => {
      state.status = "succeeded";
      toast.success("Book Updated Successfully");
    },
    [updateBook.rejected]: (state, action) => {
      state.status = "failed";
      toast.error(action.payload.data.message);
    },
  },
});

export default bookSlice.reducer;
