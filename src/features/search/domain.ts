import { Ticket } from "../app/domain"

export interface SearchState {
  userCity: string
  loading: boolean
  error: string | undefined
  current: Ticket[] | undefined
}

export type SearchFormState = {
  from: string
  to: string
  departureDate: Date | undefined
  returnDate: Date | undefined
}
