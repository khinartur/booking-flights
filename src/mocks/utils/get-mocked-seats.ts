import { getRandomIntFromRange } from "~/core/utils/get-random-int-from-range"

export const getMockedSeats = () => {
  const wing = getRandomIntFromRange(2, 3)
  const center = getRandomIntFromRange(3, 5)
  return `${wing}-${center}-${wing}`
}
