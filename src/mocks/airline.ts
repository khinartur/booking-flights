import { Airline } from "~/features/app/domain"
import emirates from "./assets/emirates.png"
import emiratesProfile from "./assets/emirates-profile.png"

export const mockAirlineEmirates: Airline = {
  logoAvatarUrl: emiratesProfile,
  logoFullUrl: emirates,
  name: "Emirates",
}

export const airlines: Airline[] = [mockAirlineEmirates]

// export const mockAirlineEmirates: Airline = {
//   logoAvatarUrl:
//     "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Emirates_logo.svg/1131px-Emirates_logo.svg.png?20190128215923",
//   logoFullUrl: "https://www.seekpng.com/png/full/394-3943361_emirates-airlines-logo-png.png",
//   name: "Emirates",
// }
