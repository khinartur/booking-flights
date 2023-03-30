import React from "react"
import styled from "styled-components"
import { Image } from "~/components/image"

export type HeaderProps = {
  auth?: React.ReactNode
  languages?: React.ReactNode
}

export function Header({ auth, languages }: HeaderProps) {
  return (
    <Container>
      <Content>
        <Label children="Flights" />
        {languages}
        {auth}
      </Content>
    </Container>
  )
}

const Container = styled.div`
  height: 62px;
  width: 100%;
  background-color: #003b95;
  color: white;
`

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 62px;
  width: 100%;
  padding: 0 80px;
  box-sizing: border-box;
  max-width: 1300px;
  color: white;
  margin: auto;

  @media (max-width: ${p => p.theme.breakpoints.laptop}) {
    padding: 0 20px;
  }
`

const Label = styled.div`
  font-size: 24px;
  font-weight: bold;
`
