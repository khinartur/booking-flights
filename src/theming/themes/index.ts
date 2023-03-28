import type { AppTheme, ThemeKey } from "../types"
import { darkTheme } from "./dark"
import { lightTheme } from "./light"

export const themeByKey: Record<ThemeKey, AppTheme> = {
  light: lightTheme,
  dark: darkTheme,
}
