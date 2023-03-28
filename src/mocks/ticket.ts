import { Ticket } from "~/features/app/domain"
import { mockAirlineEmirates } from "./airline"
import { mockPointsDict } from "./point"

export const mockTicket: Ticket = {
  direct: {
    type: "direct",
    from: mockPointsDict.dubai,
    to: mockPointsDict.london,
    totalPrice: {
      value: 480,
      currency: "$",
    },
    totalDuration: "4h 05m",
    departureDate: "2023-04-17T14:25:00",
    arrivalDate: "2023-04-17T18:30:00",
    stops: [
      {
        airline: mockAirlineEmirates,
        from: mockPointsDict.dubai,
        to: mockPointsDict.london,
        flight: "EK-7",
        departureDate: "",
        arrivalDate: "",
        duration: "8h 00m",
        cabinClass: "economy",
        luggage: [
          {
            type: "hand",
            weightKgs: 7,
          },
          {
            type: "checked",
            weightKgs: 20,
          },
        ],
        vehicle: "Airbus 388",
        seats: "3-4-3",
      },
    ],
  },
  totalPrice: {
    value: 480,
    currency: "$",
  },
}
