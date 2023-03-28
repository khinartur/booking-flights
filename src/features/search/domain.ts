import { Ticket } from "../app/domain"

export interface SearchState {
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
