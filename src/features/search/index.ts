import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { generateTicketsSearch } from "~/mocks/utils/generate-tickets-search"
import { RootState } from "~/store"
import { Ticket } from "../app/domain"
import { SearchFormState, SearchState } from "./domain"

const initialState: SearchState = {
  userCity: "",
  loading: false,
  error: undefined,
  current: undefined,
}

export const searchTickets = createAsyncThunk<Ticket[], SearchFormState>(
  "search/searchTickets",
  async ({ from, to, departureDate = new Date() }) => {
    // @todo: change to real API
    // const response = (await fetch(
    //   `https://flights.com/api/v1/tickets?from=${from}&to=${to}&dep=${departureDate.toISOString()}`,
    // )) as any
    // const data = await response.json()
    const data = await new Promise<Ticket[]>(resolve => {
      setTimeout(() => resolve(generateTicketsSearch(from, to, departureDate)), 4000)
    })
    return data
  },
)

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setUserCity: (state, action: PayloadAction<string>) => {
      state.userCity = action.payload
    },
  },
  extraReducers: builder => {
    builder.addCase(searchTickets.pending, state => {
      state.current = undefined
      state.loading = true
    })
    builder.addCase(searchTickets.fulfilled, (state, action) => {
      state.loading = false
      state.current = action.payload
    })
    builder.addCase(searchTickets.rejected, (state, action) => {
      state.loading = false
      state.error = action.error.message
    })
  },
})

export const { setUserCity } = searchSlice.actions

export const selectSearchUserCity = (state: RootState) => state.search.userCity
export const selectSearchLoading = (state: RootState) => state.search.loading
export const selectSearchCurrent = (state: RootState) => state.search.current

export default searchSlice.reducer
