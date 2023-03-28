import React from "react"
import styled, { css, StyledComponent } from "styled-components"
import { FontSize, FontWeight } from "~/theming/themes/common"
import { AppTheme } from "~/theming/types"

export type TextProps = {
  children: string
  size?: FontSize
  weight?: FontWeight
  truncate?: boolean
  noUserSelect?: boolean
  mt?: number
}

export function Text({ children, mt, size, weight, truncate, noUserSelect }: TextProps) {
  return (
    <Wrapper children={children} size={size} weight={weight} truncate={truncate} noUserSelect={noUserSelect} mt={mt} />
  )
}

const Wrapper = styled.span<{
  size?: FontSize
  weight?: FontWeight
  truncate?: boolean
  noUserSelect?: boolean
  mt?: number
}>`
  ${p => (p.size ? p.theme.fontsStyles[p.size] : css``)};
  ${p => (p.weight ? p.theme.fontsWeights[p.weight] : css``)};
  color: white;
  ${p =>
    p.mt &&
    css`
      margin-top: ${p.mt}px;
    `}
  ${p =>
    p.truncate &&
    css`
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      max-width: 100%;
    `}
  ${p =>
    p.noUserSelect &&
    css`
      user-select: none;
    `}
` as StyledComponent<"span", AppTheme, TextProps>
