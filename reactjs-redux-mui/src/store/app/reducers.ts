import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { clientStorage } from "../../utils/storage";
import {
  ACCESS_TOKEN_STORAGE_KEY,
  REFRESH_TOKEN_STORAGE_KEY,
} from "../../constant";
import { signin } from "./action";

export interface AppState {
  appReady: boolean;
  token?: string;
  tokenRegister?: string;
  isExpandedSlideBar: boolean;
  countTest: number;
}

const initialState: AppState = {
  appReady: false,
  isExpandedSlideBar: true,
  countTest: 0,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleAppReady: (state, action: PayloadAction<boolean | undefined>) => {
      state.appReady = action?.payload ?? !state.appReady;
    },
    updateAuth: (
      state,
      action: PayloadAction<{
        accessToken?: string | null;
      }>,
    ) => {
      state.token = action.payload.accessToken || undefined;
    },
    clearAuth: (state) => {
      state.token = undefined;

      clientStorage.remove(ACCESS_TOKEN_STORAGE_KEY);
      clientStorage.remove(REFRESH_TOKEN_STORAGE_KEY);
    },
    reset: () => ({ ...initialState, appReady: true }),
    count: (state, action: PayloadAction<number | undefined>) => {
      state.countTest += action?.payload ?? 1;
    },
  },
  extraReducers: (builder) =>
    builder.addCase(
      signin.fulfilled,
      (
        state,
        action: PayloadAction<{ accessToken: string; refreshToken: string }>,
      ) => {
        const { accessToken, refreshToken } = action.payload;

        clientStorage.set(ACCESS_TOKEN_STORAGE_KEY, accessToken);
        clientStorage.set(REFRESH_TOKEN_STORAGE_KEY, refreshToken);

        state.token = accessToken;
      },
    ),
});

export const { toggleAppReady, updateAuth, clearAuth, reset, count } =
  appSlice.actions;

export default appSlice.reducer;
