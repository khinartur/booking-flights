import { AppTheme } from "../types"
import { commonTheme } from "./common"

const colors = {
  primary: "#006CE4",
  primaryHover: "rgba(0, 108, 228, 0.1)",
  accent: "#FFB700",
  contrast: "#1A1A1A",
  secondary: "#A2A2A2",
  text: "#1A1A1A",
  textSecondary: "#717171",
  brand: "#003B95",
  skeleton: "rgba(162, 162, 162, 0.25)",
  border: "rgba(0, 0, 0, 0.2)",
  white: "#FFFFFF",
  background: "#FFFFFF",
  backgroundSecondary: "#F5F5F5",
  error: "#D4111F",
}

export const lightTheme: AppTheme = {
  key: "light",
  colors,
  ...commonTheme,
}
