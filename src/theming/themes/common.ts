import { css, FlattenSimpleInterpolation } from "styled-components"
import { CommonTheme } from "../types"

export const breakpoints = ["360px", "768px", "1024px", "1280px", "1440px"] as string[] & {
  mobile: string
  tablet: string
  laptop: string
  desktop: string
  monitor: string
}

breakpoints.mobile = breakpoints[0]!
breakpoints.tablet = breakpoints[1]!
breakpoints.laptop = breakpoints[2]!
breakpoints.desktop = breakpoints[3]!
breakpoints.monitor = breakpoints[4]!

export enum FontSize {
  TITLE_APP = "title_app",
  BODY = "body",
}

export enum FontWeight {
  LIGHT = "light",
  REGULAR = "regular",
  BOLD = "bold",
  BLACK = "black",
}

const fontWeights: Record<FontWeight, number> = {
  [FontWeight.LIGHT]: 300,
  [FontWeight.REGULAR]: 400,
  [FontWeight.BOLD]: 700,
  [FontWeight.BLACK]: 900,
}

const fontsWeights = Object.values(FontWeight).reduce((acc, x) => {
  return {
    ...acc,
    [x]: mapWeightToFontStyle(x),
  }
}, {} as Record<FontWeight, FlattenSimpleInterpolation>)

function mapWeightToFontStyle(weight: FontWeight): FlattenSimpleInterpolation {
  return css`
    font-weight: ${fontWeights[weight]};
  `
}

const fontSizes: Record<FontSize, number> = {
  [FontSize.TITLE_APP]: 32,
  [FontSize.BODY]: 24,
}

const lineHeight: Record<FontSize, number> = {
  [FontSize.TITLE_APP]: 46,
  [FontSize.BODY]: 35,
}

const fontsStyles = Object.values(FontSize).reduce((acc, x) => {
  return {
    ...acc,
    [x]: mapSizeToFontStyle(x),
  }
}, {} as Record<FontSize, FlattenSimpleInterpolation>)

function mapSizeToFontStyle(size: FontSize): FlattenSimpleInterpolation {
  return css`
    font-size: ${fontSizes[size]}px;
    line-height: ${lineHeight[size]}px;
  `
}

const transitions = {
  fast: "0.08s all ease-in-out",
  medium: "0.15s all ease-in-out",
  long: "0.3s all ease-in-out",
}

const uiSizes = {
  sm: 40,
  md: 48,
  lg: 56,
  xl: 64,
}

export enum ZIndex {
  DEFAULT = "default",
}

const zIndexes = {
  [ZIndex.DEFAULT]: 0,
}

export const commonTheme: CommonTheme = {
  zIndexes,
  breakpoints,
  fontsStyles,
  fontsWeights,
  transitions,
  uiSizes,
}
