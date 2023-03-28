import { getRandomIntFromRange } from "~/core/utils/get-random-int-from-range"
import { ENGLISH_CONSONANTS } from "./get-random-short-airport"

export const getRandomFlight = (): string => {
  const first = ENGLISH_CONSONANTS[getRandomIntFromRange(0, 21)]
  const second = ENGLISH_CONSONANTS[getRandomIntFromRange(0, 21)]
  const flightNumber = getRandomIntFromRange(1, 99)

  return first + second + "-" + flightNumber
}
