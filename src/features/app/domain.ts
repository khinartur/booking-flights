import { ThemeKey } from "~/theming/types"

export type Airline = {
  name: string
  logoAvatarUrl: string
  logoFullUrl: string
}

export type Airport = {
  short: string
  name: string
}

export type Point = {
  airport: Airport
  city: string
}

export type Price = {
  value: number
  currency: string
}

export type Luggage = {
  type: "hand" | "checked"
  weightKgs: number
}

export type RouteType = "direct" | "compound"

export type Trip = {
  airline: Airline
  from: Point
  to: Point
  flight: string
  luggage: Luggage[]
  departureDate: string
  arrivalDate: string
  duration: string
  cabinClass: "economy" | "economy-plus" | "business"
  vehicle: string
  seats: string
}

export type Route = {
  type: RouteType
  stops: Trip[]
  from: Point
  to: Point
  departureDate: string
  arrivalDate: string
  totalDuration: string
  totalPrice: Price
}

export type Ticket = {
  direct: Route
  returning?: Route
  totalPrice: Price
}

export type TripType = "one-way" | "return"

export type PopularDestination = {
  city: string
  image: string
  departureAirport: string
  date: string
  tripType: TripType
}

export interface AppState {
  theme: ThemeKey
}
