import { FlattenSimpleInterpolation } from "styled-components"
import { FontSize, FontWeight, ZIndex } from "./themes/common"

export const breakpointSizes = ["mobile", "tablet", "laptop", "desktop", "monitor"] as const
export type BreakpointSize = (typeof breakpointSizes)[number]

export const uiSizes = ["sm", "md", "lg", "xl"] as const
export type UISize = (typeof uiSizes)[number]

export type CommonTheme = {
  breakpoints: Record<BreakpointSize, string>
  fontsStyles: Record<FontSize, FlattenSimpleInterpolation>
  fontsWeights: Record<FontWeight, FlattenSimpleInterpolation>
  transitions: {
    fast: string
    medium: string
    long: string
  }
  uiSizes: Record<UISize, number>
  zIndexes: Record<ZIndex, number>
}

export type AppTheme = CommonTheme & {
  key: ThemeKey

  colors: {
    primary: string
    primaryHover: string
    accent: string
    contrast: string
    secondary: string
    text: string
    textSecondary: string
    brand: string
    skeleton: string
    border: string
    white: string
    background: string
    backgroundSecondary: string
    error: string
  }
}

export const themeKeys = ["light", "dark"] as const

export type ThemeKey = (typeof themeKeys)[number]
