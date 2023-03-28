import { capitalize } from "~/core/utils/capitalize";
import { Point } from "~/features/app/domain";
import { mockPointsDict } from "../point";
import { getRandomShortAirport } from "./get-random-short-airport";

export const getMockedPoint = (city: string): Point => {
  const key = city.toLowerCase()
  return (
    mockPointsDict[key] || {
      airport: {
        short: getRandomShortAirport(),
        name: `${capitalize(city)} International Airport`,
      },
      city: capitalize(city),
    }
  )
}
