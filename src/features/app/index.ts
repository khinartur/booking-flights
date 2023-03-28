import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "~/store"
import { getInitialAppState, saveAppStateInStorage } from "~/store/utils"
import { ThemeKey } from "~/theming/types"
import { AppState } from "./domain"

const defaultState: AppState = {
  theme: "light",
}

const initialState: AppState = getInitialAppState(defaultState)

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<ThemeKey>) => {
      state.theme = action.payload
      saveAppStateInStorage(state)
    },
  },
})

export const { changeTheme } = appSlice.actions

export const selectAppTheme = (state: RootState) => state.app.theme

export default appSlice.reducer
