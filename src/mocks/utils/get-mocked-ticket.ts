import { Ticket } from "~/features/app/domain";
import { generateFlightTimings } from "./generate-flight-timings";
import { getMockedAirline } from "./get-mocked-airline";
import { getMockedLuggage } from "./get-mocked-luggage";
import { getMockedPoint } from "./get-mocked-point";
import { getMockedSeats } from "./get-mocked-seats";
import { getMockedVehicle } from "./get-mocked-vehicle";
import { getRandomFlight } from "./get-random-flight";
import { getRandomPrice } from "./get-random-price";

export const getMockedTicket = (depCity: string, depDay: Date, arrCity: string): Ticket => {
  const from = getMockedPoint(depCity)
  const to = getMockedPoint(arrCity)
  const price = getRandomPrice()
  const [departureDate, duration, arrivalDate] = generateFlightTimings(depDay)

  return {
    direct: {
      type: "direct",
      from,
      to,
      totalPrice: price,
      totalDuration: duration,
      departureDate,
      arrivalDate,
      stops: [
        {
          airline: getMockedAirline(),
          from,
          to,
          flight: getRandomFlight(),
          departureDate,
          arrivalDate,
          duration,
          cabinClass: "economy",
          luggage: getMockedLuggage(),
          vehicle: getMockedVehicle(),
          seats: getMockedSeats(),
        },
      ],
    },
    totalPrice: price,
  }
}
