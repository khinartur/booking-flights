import React from "react"
import styled from "styled-components"
import { MOBILE_SCREEN_THRESHOLD } from "~/core/constants"
import { useMediaQuery } from "~/core/hooks/use-media-query"
import { capitalize } from "~/core/utils/capitalize"
import { formatDateStrToDayAndTime } from "~/core/utils/date"
import { formatLuggageToStr } from "~/core/utils/luggage"
import type { Ticket } from "~/features/app/domain"

export type SecondUnfoldedContentProps = {
  ticket: Ticket
}

export function SecondUnfoldedContent({ ticket }: SecondUnfoldedContentProps) {
  const { direct, returning } = ticket
  const { stops, departureDate, arrivalDate, totalDuration } = direct
  const { flight, cabinClass, luggage } = stops[0]

  const isMobile = useMediaQuery(MOBILE_SCREEN_THRESHOLD)

  const [depDay, depTime] = formatDateStrToDayAndTime(departureDate)
  const [arrDay, arrTime] = formatDateStrToDayAndTime(arrivalDate)

  return (
    <Wrapper>
      <Column>
        <Cell>
          <Value children={(isMobile ? "" : depDay + ", ") + depTime} />
          <Description children="Departure" />
        </Cell>
        <Cell>
          <Value children={flight} />
          <Description children="Flight" />
        </Cell>
      </Column>
      <Column>
        <Cell>
          <Value children={(isMobile ? "" : arrDay + ", ") + arrTime} />
          <Description children="Arrival" />
        </Cell>
        <Cell>
          <Value children={capitalize(cabinClass)} />
          <Description children="Class" />
        </Cell>
      </Column>
      <Column>
        <Cell>
          <Value children={totalDuration} />
          <Description children="Duration" />
        </Cell>
        <Cell>
          <Value children={formatLuggageToStr(luggage)} />
          <Description children="Luggage" />
        </Cell>
      </Column>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
  height: 100%;

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

  @media (max-width: ${p => p.theme.breakpoints.tablet}) {
    font-size: 14px;
  }
`

const Description = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: ${p => p.theme.colors.text};
`
