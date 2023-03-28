import React from "react"
import styled, { css, keyframes } from "styled-components"

export type SkeletonProps = {
  round?: boolean
  noAnimation?: boolean
  width: string | number
  height?: string | number
  borderRadius?: number
}

const blink = keyframes`
	0% { opacity: 0.5 }
	50% { opacity: 1 }
	100% { opacity: 0.5 }
`

export const Skeleton = styled.div<SkeletonProps>`
  width: ${p => typeof p.width === "string" ? p.width : p.width + "px"};
  height: ${p => (p.round ? p.width : p.height)}px;
  border-radius: ${p => p.round ? "100%" : p.borderRadius + "px"};
  animation: ${p =>
    p.noAnimation
      ? css``
      : css`
          ${blink} 1s linear infinite;
        `};
  background-color: ${p => (p.noAnimation ? p.theme.colors.secondary : p.theme.colors.skeleton)};
` as React.FC<SkeletonProps>


