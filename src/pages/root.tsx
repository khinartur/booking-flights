import React from "react"
import styled, { ThemeProvider } from "styled-components"
import { selectAppTheme } from "~/features/app"
import { useAppSelector } from "~/store/hooks"
import { themeByKey } from "~/theming/themes"
import { MainPage } from "./main"

export function Root() {
  const theme = useAppSelector(selectAppTheme)

  return (
    <ThemeProvider theme={themeByKey[theme]}>
      <Container>
        <MainPage />
      </Container>
    </ThemeProvider>
  )
}

const Container = styled.div`

`
