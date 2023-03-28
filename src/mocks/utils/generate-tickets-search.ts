import { getRandomIntFromRange } from "~/core/utils/get-random-int-from-range"
import { Ticket } from "~/features/app/domain"
import { getMockedTicket } from "./get-mocked-ticket"

export const generateTicketsSearch = (from: string, to: string, departure: Date): Ticket[] => {
  const amount = getRandomIntFromRange(10, 30)
  const res: Ticket[] = []
  for (let i = 0; i < amount; i++) {
    res.push(getMockedTicket(from, departure, to))
  }
  return res
}
