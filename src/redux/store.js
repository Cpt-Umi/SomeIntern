import { configureStore, createSlice } from "@reduxjs/toolkit";

const initalState = {
  value: { username: "" },
};

export const userSlice = createSlice({
  name: "user",
  initialState: initalState,
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },

    logout: (state) => {
      state.value = initalState.value.username;
    },
  },
});

export const { login, logout } = userSlice.actions;
export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});
