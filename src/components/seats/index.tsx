import React from "react"
import styled from "styled-components"
import planeOutlineIcon from "./assets/planeOutline.svg"

export type SeatsProps = {}

// @todo: parameters
export function Seats({}: SeatsProps) {
  const rows: JSX.Element[] = []
  for (let i = 0; i < 3; i++) {
    rows.push(
      <Row key={i}>
        <Block>
          <Seat />
          <Seat />
          <Seat />
        </Block>
        <Block>
          <Seat />
          <Seat />
          <Seat />
          <Seat />
        </Block>
        <Block>
          <Seat />
          <Seat />
          <Seat />
        </Block>
      </Row>,
    )
  }

  return (
    <Wrapper>
      {rows.map(row => <>{row}</>)}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  justify-content: end;
  align-items: center;
  width: 110px;
  height: 75px;
  padding-bottom: 8px;
  box-sizing: border-box;
  background-image: url(${planeOutlineIcon});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`

const Seat = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 2px;
  background-color: ${p => p.theme.colors.primary};
`

const Block = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2px;
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`
