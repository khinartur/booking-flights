import { getRandomIntFromRange } from "~/core/utils/get-random-int-from-range";
import { Luggage } from "~/features/app/domain";

export const getMockedLuggage = (): Luggage[] => {
  const res: Luggage[] = [
    {
      type: "hand",
      weightKgs: getRandomIntFromRange(5, 10),
    }
  ]
  const random = getRandomIntFromRange(0, 99)
  if (random % 2 === 0) {
    res.push({
      type: "checked",
      weightKgs: getRandomIntFromRange(20, 35),
    })
  }

  return res
}
