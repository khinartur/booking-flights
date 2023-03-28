import { getRandomIntFromRange } from "~/core/utils/get-random-int-from-range"
import { vehicles } from "../vehicle"

export const getMockedVehicle = (): string => {
  return vehicles[getRandomIntFromRange(0, vehicles.length)]
}
