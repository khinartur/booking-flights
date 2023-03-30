import paris from "../assets/popular-cities/paris.jpg"
import berlin from "../assets/popular-cities/berlin.jpg"
import milan from "../assets/popular-cities/milan.jpg"
import barcelona from "../assets/popular-cities/barcelona.jpg"
import lisbon from "../assets/popular-cities/lisbon.jpg"
import london from "../assets/popular-cities/london.jpg"
import { PopularDestination } from "~/features/app/domain"

export const getMockedPopularDestinations = (airport: string, date: string): PopularDestination[] => {
  return [
    {
      city: "Paris, France",
      image: paris,
      departureAirport: airport,
      date,
      tripType: "one-way",
    },
    {
      city: "Berlin, Germany",
      image: berlin,
      departureAirport: airport,
      date,
      tripType: "one-way",
    },
    {
      city: "Milan, Italy",
      image: milan,
      departureAirport: airport,
      date,
      tripType: "one-way",
    },
    {
      city: "Barcelona, Spain",
      image: barcelona,
      departureAirport: airport,
      date,
      tripType: "one-way",
    },
    {
      city: "Lisbon, Portugal",
      image: lisbon,
      departureAirport: airport,
      date,
      tripType: "one-way",
    },
    {
      city: "London, UK",
      image: london,
      departureAirport: airport,
      date,
      tripType: "one-way",
    },
  ]
}
