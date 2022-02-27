import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import clients, { thunkHandler } from "../../service/api";

import { toast } from "react-toastify";

const initialState = {
  status: "idle",
  students: null,
  singleStudents: null,
};

export const getStudents = createAsyncThunk(
  "students/getStudents",
  (_, thunkAPI) => {
    const response = thunkHandler(
      clients.default.client({
        method: "GET",
        url: "/student",
      }),
      thunkAPI
    );
    return response;
  }
);

export const getStudentById = createAsyncThunk(
  "students/getStudentById",
  ({ id }, thunkAPI) => {
    const response = thunkHandler(
      clients.default.client({
        method: "GET",
        url: `/student/${id}`,
      }),
      thunkAPI
    );
    return response;
  }
);

export const updateStudent = createAsyncThunk(
  "students/updateStudent",
  ({ data }, thunkAPI) => {
    const response = thunkHandler(
      clients.default.client({
        method: "PUT",
        url: `/student/${data.id}`,
        data
      }),
      thunkAPI
    );
    return response;
  }
);

export const studentSlice = createSlice({
  name: "students",
  initialState,
  reducers: {},
  extraReducers: {
    [getStudents.pending]: (state) => {
      state.status = "loading";
    },
    [getStudents.fulfilled]: (state, action) => {
      const actionState = action.payload.data;
      state.status = "succeeded";
      state.students = actionState;
    },
    [getStudents.rejected]: (state, action) => {
      state.status = "failed";
      toast.error(action.payload.data.message);
    },
    [getStudentById.pending]: (state) => {
      state.status = "loading";
    },
    [getStudentById.fulfilled]: (state, action) => {
      const actionState = action.payload.data;
      state.status = "succeeded";
      state.singleStudents = actionState;
    },
    [getStudentById.rejected]: (state, action) => {
      state.status = "failed";
      toast.error(action.payload.data.message);
    },
    [updateStudent.pending]: (state) => {
      state.status = "loading";
    },
    [updateStudent.fulfilled]: (state) => {
      state.status = "succeeded";
      toast.success("Student Updated Successfully");
    },
    [updateStudent.rejected]: (state, action) => {
      state.status = "failed";
      toast.error(action.payload.data.message);
    },
  },
});

export default studentSlice.reducer;
