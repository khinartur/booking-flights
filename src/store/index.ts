import { configureStore } from "@reduxjs/toolkit"
import appReducer from "~/features/app"
import searchReducer from "~/features/search"

const store = configureStore({
  reducer: {
    app: appReducer,
    search: searchReducer,
  },
})

export default store

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
