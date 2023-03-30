import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { generateTicketsSearch } from "~/mocks/utils/generate-tickets-search"
import { getMockedPopularDestinations } from "~/mocks/utils/get-mocked-popular-destinations"
import { RootState } from "~/store"
import { PopularDestination } from "../app/domain"
import { PopularCitiesState } from "./domain"

const initialState: PopularCitiesState = {
  loading: false,
  error: undefined,
  current: undefined,
}

export const fetchPopularCities = createAsyncThunk<PopularDestination[], { from: string; departureDate: Date }>(
  "popular-cities/fetchPopularCities",
  async ({ from, departureDate }) => {
    // @todo: change to real API
    // const response = (await fetch(
    //   `https://flights.com/api/v1/popular-cities?from=${from}&dep=${departureDate.toISOString()}`,
    // )) as any
    // const data = await response.json()
    const data = await new Promise<PopularDestination[]>(resolve => {
      setTimeout(() => resolve(getMockedPopularDestinations(from, departureDate.toDateString())), 3000)
    })
    return data
  },
)

export const popularCitiesSlice = createSlice({
  name: "popular-cities",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchPopularCities.pending, state => {
      state.current = undefined
      state.loading = true
    })
    builder.addCase(fetchPopularCities.fulfilled, (state, action) => {
      state.loading = false
      state.current = action.payload
    })
    builder.addCase(fetchPopularCities.rejected, (state, action) => {
      state.loading = false
      state.error = action.error.message
    })
  },
})

export const {} = popularCitiesSlice.actions

export const selectPopularCitiesLoading = (state: RootState) => state.popularCities.loading
export const selectPopularCitiesCurrent = (state: RootState) => state.popularCities.current

export default popularCitiesSlice.reducer
