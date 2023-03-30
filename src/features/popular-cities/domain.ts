import { PopularDestination } from "../app/domain"

export interface PopularCitiesState {
  loading: boolean
  error: string | undefined
  current: PopularDestination[] | undefined
}
