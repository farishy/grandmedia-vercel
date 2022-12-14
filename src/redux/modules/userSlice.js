import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser = createAsyncThunk(
  "users/login",
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await axios.post(
        "https://grandmadia-api.azurewebsites.net/login",
        // "http://localhost:3001/login",
        {
          email: email,
          password: password,
        }
      );
      localStorage.setItem("userId", response.data.token);
      return response;
    } catch (error) {
      //   console.log(error.response.data.errorMessage);
      return error.response;
    }
  }
);

export const signupUser = createAsyncThunk(
  "users/signup",
  async ({ name, email, password }, thunkAPI) => {
    try {
      const response = await axios.post(
        "https://grandmadia-api.azurewebsites.net/signup",
        {
          name: name,
          email: email,
          password: password,
        }
      );
      return response;
    } catch (e) {
      return e.response;
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState: {
    id: "",
    email: "",
    name: "",
    isFetching: false,
    isSuccess: false,
    isError: false,
    errorMessage: "",
  },
  reducers: {
    [loginUser.fulfilled]: (state, { payload }) => {
      state.id = payload.userId;
      state.email = payload.email;
      state.name = payload.name;
      state.isFetching = false;
      state.isSuccess = true;
      return state;
    },
    [loginUser.rejected]: (state, { payload }) => {
      console.log("payload", payload);
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload.message;
    },
    [loginUser.pending]: (state) => {
      state.isFetching = true;
    },
  },
  extraReducers: {
    [signupUser.fulfilled]: (state, { payload }) => {
      state.isFetching = false;
      state.isSuccess = true;
      state.email = payload.email;
      state.username = payload.name;
    },
    [signupUser.pending]: (state) => {
      state.isFetching = true;
    },
    [signupUser.rejected]: (state, { payload }) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload.message;
    },
  },
});

export const userSelector = (state) => state.user;
