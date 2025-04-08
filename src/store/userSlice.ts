import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  id: string;
  name: string;
  email: string;
  photo: string;
}

interface UserState {
  user: User | null;
  token: string | null;
}

const initialState: UserState = {
  user:
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("user") || "null")
      : null,
  token:
    typeof window !== "undefined"
      ? localStorage.getItem("token") || null
      : null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser(state, action: PayloadAction<{ user: User; token: string }>) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      // Save the user and token to localStorage for persistence
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      localStorage.setItem("token", action.payload.token);
    },
    logoutUser(state) {
      state.user = null;
      state.token = null;
      // Clear from localStorage when logging out
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    },
  },
});

export const { loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
