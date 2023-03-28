import React from "react"
import styled from "styled-components"
import { Image } from "~/components/image"
import { Seats } from "~/components/seats"
import { MOBILE_SCREEN_THRESHOLD } from "~/core/constants"
import { useMediaQuery } from "~/core/hooks/use-media-query"
import type { Ticket } from "~/features/app/domain"

export type ThirdUnfoldedContentProps = {
  ticket: Ticket
}

export function ThirdUnfoldedContent({ ticket }: ThirdUnfoldedContentProps) {
  const { direct, returning } = ticket
  const { stops } = direct
  const { airline, vehicle, seats } = stops[0]

  const isMobile = useMediaQuery(MOBILE_SCREEN_THRESHOLD)

  return (
    <Wrapper>
      <Column>
        <Logo src={airline.logoFullUrl} />
        <Cell>
          <Value children={airline.name} />
          <Description children={isMobile ? vehicle : "Airline"} />
        </Cell>
      </Column>
      {!isMobile && (
        <Column>
          <Cell>
            <Value children={vehicle} />
            <Description children="Vehicle" />
          </Cell>
          <Cell>
            <Value children={seats} />
            <Description children="Seats" />
          </Cell>
        </Column>
      )}
      <SeatsWrapper>
        <Seats />
        {isMobile && <Description children={"Seats " + seats} />}
      </SeatsWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 100%;
`

const Logo = styled(Image)`
  height: 36px;
  object-fit: contain;
  object-position: left;
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
  height: 100%;
  max-height: 100%;

  @media (max-width: ${p => p.theme.breakpoints.tablet}) {
    justify-content: space-evenly;
  }
`

const Cell = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`

const Value = styled.span`
  font-weight: 600;
  font-size: 16px;
  line-height: 130%;
  color: ${p => p.theme.colors.text};
`

const Description = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: ${p => p.theme.colors.text};
`

const SeatsWrapper = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
`
