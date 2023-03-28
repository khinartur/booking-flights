import React from "react"
import { Image } from "../image"
import takeoffIcon from "./assets/takeoff.svg"
import landingIcon from "./assets/landing.svg"
import calendarIcon from "./assets/calendar.svg"

export type IconType = "takeoff" | "landing" | "calendar"

export type IconProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  type: IconType
}

export function Icon({ type, ...rest }: IconProps) {
  return <Image src={getIconByType(type)} {...rest} />
}

function getIconByType(type: IconType) {
  switch (type) {
    case "takeoff":
      return takeoffIcon
    case "landing":
      return landingIcon
    case "calendar":
      return calendarIcon
  }
}
