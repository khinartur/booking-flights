import React from "react"
import styled from "styled-components"
import { Image } from "~/components/image"
import { MOBILE_SCREEN_THRESHOLD } from "~/core/constants"
import { useMediaQuery } from "~/core/hooks/use-media-query"

export type AirlineLogoProps = {
  src: string
}

export function AirlineLogo({ src }: AirlineLogoProps) {
  const isMobile = useMediaQuery(MOBILE_SCREEN_THRESHOLD)

  return <Logo mobile={isMobile} src={src} />
}

const Logo = styled(Image)<{ mobile: boolean }>`
  width: ${p => (p.mobile ? 35 : 70)}px;
  height: ${p => (p.mobile ? 35 : 70)}px;
  border-radius: 50%;
`
