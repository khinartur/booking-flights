import React from "react"
import styled, { css } from "styled-components"

export type ImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  radius?: number
}

export function Image({ src, radius, ...rest }: ImageProps) {
  return <ImageBase src={src} radius={radius} {...rest} />
}

const ImageBase = styled.img<{ radius?: number }>`
  ${p =>
    p.radius &&
    css`
      border-radius: ${p.radius}px;
    `}
`
