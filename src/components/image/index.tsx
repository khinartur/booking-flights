import React from "react"

export type ImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {}

export function Image({ src, ...rest }: ImageProps) {
  return <img src={src} {...rest} />
}
