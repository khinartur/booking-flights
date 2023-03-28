import { getRandomIntFromRange } from "~/core/utils/get-random-int-from-range";
import { Price } from "~/features/app/domain";

export const getRandomPrice = (): Price => {
  return {
    value: getRandomIntFromRange(100, 4000),
    currency: "$",
  }
}
