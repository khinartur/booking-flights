import { Airline } from "~/features/app/domain"
import emirates from "./assets/emirates.png"
import emiratesProfile from "./assets/emirates-profile.png"
import lufthansa from "./assets/lufthansa.png"
import lufthansaProfile from "./assets/lufthansa-profile.png"
import klm from "./assets/klm.png"
import klmProfile from "./assets/klm-profile.png"
import airfrance from "./assets/airfrance.png"
import airfranceProfile from "./assets/airfrance-profile.png"
import turkish from "./assets/turkish.png"
import turkishProfile from "./assets/turkish-profile.png"
import british from "./assets/british.png"
import britishProfile from "./assets/british-profile.png"

export const mockAirlineEmirates: Airline = {
  logoAvatarUrl: emiratesProfile,
  logoFullUrl: emirates,
  name: "Emirates",
}

export const airlines: Airline[] = [
  mockAirlineEmirates,
  {
    logoAvatarUrl: lufthansaProfile,
    logoFullUrl: lufthansa,
    name: "Lufthansa",
  },
  {
    logoAvatarUrl: klmProfile,
    logoFullUrl: klm,
    name: "KLM",
  },
  {
    logoAvatarUrl: airfranceProfile,
    logoFullUrl: airfrance,
    name: "Air France",
  },
  {
    logoAvatarUrl: turkishProfile,
    logoFullUrl: turkish,
    name: "Turkish Airlines",
  },
  {
    logoAvatarUrl: britishProfile,
    logoFullUrl: british,
    name: "British Airways",
  },
]

// export const mockAirlineEmirates: Airline = {
//   logoAvatarUrl:
//     "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Emirates_logo.svg/1131px-Emirates_logo.svg.png?20190128215923",
//   logoFullUrl: "https://www.seekpng.com/png/full/394-3943361_emirates-airlines-logo-png.png",
//   name: "Emirates",
// }
