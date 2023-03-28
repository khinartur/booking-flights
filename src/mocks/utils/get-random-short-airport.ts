import { getRandomIntFromRange } from "~/core/utils/get-random-int-from-range";

export const ENGLISH_CONSONANTS = "BCDFGHJKLMNPQRSTVWXYZ";

export const getRandomShortAirport = (): string => {
  const first = ENGLISH_CONSONANTS[getRandomIntFromRange(0, 21)]
  const second = ENGLISH_CONSONANTS[getRandomIntFromRange(0, 21)]
  const third = ENGLISH_CONSONANTS[getRandomIntFromRange(0, 21)]

  return first + second + third
}
