import React from "react"
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport"
import { ThemeProvider } from "styled-components"
import { themeByKey } from "../src/theming/themes"

export const decorators = [
  (Story: any) => (
    <ThemeProvider theme={themeByKey.light}>
      <Story />
    </ThemeProvider>
  ),
]

export const parameters = {
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
}
