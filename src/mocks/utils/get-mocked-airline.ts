import { getRandomIntFromRange } from "~/core/utils/get-random-int-from-range"
import { Airline } from "~/features/app/domain"
import { airlines } from "../airline"

export const getMockedAirline = (): Airline => {
  return airlines[getRandomIntFromRange(0, airlines.length - 1)]
}
